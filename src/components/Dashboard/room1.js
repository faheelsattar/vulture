import React, { useRef, useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import io from "socket.io-client"
import Sidebar from "./Roomlayout/sidebar"

const Video = (props) => {
    const ref = useRef()

    useEffect(() => {
        console.log(props.peer)
        props.peer.ontrack = (event) => {
            console.log("Remote Streamss", event.streams[0])
            ref.current.srcObject = event.streams[0]
        }
    }, [])

    return (
        <video playsInline autoPlay ref={ref} />
    )
}
const Room1 = () => {
    let [peers, setPeers] = useState({})
    let peerref = useRef(peers)
    const socket = io.connect("http://localhost:4000")
    const localMediaStream = useRef(null)
    const userstream = useRef(null)
    const peerMediaElements = useRef({})
    const params = useParams()

    const setupLocalMedia = (callback) => {
        if (userstream.current !== null) {
            console.log("Inner if")
            if (callback) {
                callback()
            }
            return
        }
        console.log("Requesting access to local audio / video inputs")
        // navigator.getUserMedia = (navigator.getUserMedia ||
        //     navigator.webkitGetUserMedia ||
        //     navigator.mozGetUserMedia ||
        //     navigator.msGetUserMedia
        // )
        navigator.mediaDevices.getUserMedia({ audio: true, video: true })
            .then(stream => {
                console.log("USER STREAMMMM", stream)
                localMediaStream.current.srcObject = stream
                userstream.current = stream
                if (callback) {
                    callback()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        console.log("First useEffect Called", peers)
        peerref.current = peers
    })
    useEffect(() => {
        socket.on("connect", (userid) => {
            setupLocalMedia(() => {
                /* once the user has given us access to their
                * microphone/camcorder, join the channel and start peering up */
                joinRoom(params.roomid, { userid: userid })
            })
        })

        socket.on('room-user', function (data) {
            //online users
            console.log(data)
        })
        socket.on("addPeer", (config) => {
            console.log('Signaling server said to add peer:', config)
            const peerid = config.peer_id
            if (peerid in peerref.current) {
                return
            }
            const peerconnection = new RTCPeerConnection({
                iceServers: [
                    {
                        urls: "stun:stun.stunprotocol.org"
                    },
                    {
                        urls: 'turn:numb.viagenie.ca',
                        credential: 'muazkh',
                        username: 'webrtc@live.com'
                    },
                ]
            })
            console.log("Before adding peer", peerref.current)
            setPeers({
                ...peerref.current,
                [peerid]: peerconnection
            })
            console.log("After adding peer", peerref.current)
            addPeer(config, peerconnection)
            // if (config.should_create_offer) {
            //     createOffer(peerid, peer)
            // }
        })

        socket.on("sessionDescription", (config) => {
            createAnswer(config)
        })

        socket.on('iceCandidate', (config) => {
            const peer = peerref.current[config.peer_id]
            const ice_candidate = config.ice_candidate
            peer.addIceCandidate(new RTCIceCandidate(ice_candidate))
        })
    }, [])

    const joinRoom = (roomid, userdata) => {
        socket.emit("join", { roomid: roomid, userdate: userdata })
    }

    const addPeer = (config, peer) => {
        const peerid = config.peer_id
        peer.onicecandidate = (event) => {
            if (event.candidate) {
                socket.emit('relayICECandidate', {
                    peer_id: peerid,
                    ice_candidate: {
                        sdpMLineIndex: event.candidate.sdpMLineIndex,
                        candidate: event.candidate.candidate
                    }
                })
            }
        }
        // for (const track of userstream.current.getTracks()) {
        //     console.log("tRACK", track)
        //     peer.addTrack(track, userstream.current)
        // }
        userstream.current.getTracks().forEach(track => {
            console.log("tRACK", track)
            peer.addTrack(track, userstream.current)
        })

        peer.ontrack = (event) => {
            console.log("Remote Streamss", event.streams[0])
            peerMediaElements.current[peerid] = event.streams[0]
        }
        if (config.should_create_offer) {
            peer.onnegotiationneeded = createOffer(peerid, peer)
        }
        return peer
    }

    const createOffer = (peerid, peer) => {
        console.log("Creating offer to ", peerid)
        peer.createOffer().then(offer => {
            console.log("Local offer description is: ", offer)
            peer.setLocalDescription(offer)
            return offer
        }).then((offer) => {
            const payload = {
                peer_id: peerid,
                session_description: offer,
                type: "offer"
            }
            socket.emit("relaySessionDescription", payload)
            console.log("Offer setLocalDescription succeeded")
        }).catch(e => console.log("Error sending offer", e))
    }

    const createAnswer = (config) => {
        console.log('Remote description received: ', config)
        const peerid = config.peer_id
        console.log(peerref.current)
        const peer = peerref.current[peerid]
        const remotedescription = config.session_description
        console.log(config.session_description)
        const desc = new RTCSessionDescription(remotedescription)
        const stuff = peer.setRemoteDescription(desc, () => {
            console.log("setRemoteDescription succeeded")
            if (remotedescription.type === "offer") {
                console.log("Creating answer")
                peer.createAnswer((localdescription) => {
                    console.log("Answer description is: ", localdescription)
                    peer.setLocalDescription(localdescription,
                        () => {
                            const payload = {
                                peer_id: peerid,
                                session_description: localdescription,
                                type: "answer"
                            }
                            socket.emit("relaySessionDescription", payload)
                            console.log("Answer setLocalDescription succeeded")
                        },
                        (err) => {
                            console.log("Answer setlocation failed", err)
                        })
                },
                    (err) => {
                        console.log("Error creating answer", err)
                    })
            }
        },
            (err) => {
                console.log("Set remote description error", err)
            })
    }
    return (
        <div>
            <Sidebar />
            <div>
                <video autoPlay ref={localMediaStream} />
                {console.log("All remote videeos", peerMediaElements)}
                {
                    Object.keys(peers).map((peerid, index) => {
                        return (
                            <Video peer={peers[peerid]} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Room1