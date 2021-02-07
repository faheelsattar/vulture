import React, { useRef, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import io from "socket.io-client";

const Video = (props) => {
    const ref = useRef();
    useEffect(() => {
        console.log(props.peer)
        // props.peer.ontrack(event => {
        //     ref.current.srcObject = event.streams[0];
        // })
    }, []);

    return (
        <video playsInline autoPlay ref={ref} />
    );
}
const Room = (props) => {
    const [peers, setPeers] = useState([]);
    const uservideo = useRef();
    const partnervideo = useRef();
    const peerref = useRef([]);
    const socket = io.connect("http://localhost:4000")
    const otheruser = useRef();
    const userstream = useRef();
    const params = useParams()

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
            uservideo.current.srcObject = stream;
            userstream.current = stream;
            console.log(params)
            socket.emit("join room", params.roomid);

            socket.on("user joined", socketid=>{
                const peers =[]
                const peer = addPeer(socketid)
                peerref.current.push({
                    peerID: socketid,
                    peer: peer
                })
                peers.push(peer)
                setPeers(peers);
            })
            //user A id == userid
            socket.on("all users", users => {
                const peers = [];
                users.forEach(userid => {
                    console.log("Userid:", userid, "Joiner Id:", socket.id)
                    const peer = createPeer(userid, socket.id);
                    peerref.current.push({
                        peerID: userid,
                        peer: peer
                    })
                    peers.push(peer);
                })
                setPeers(peers);
            })

            //user A will get notified about user b joining user B id == userid
            // socket.on("user joined", payload => {
            //     otheruser.current = payload.userid;
            //     const peer = addPeer(payload.userid)
            //     peerref.current.push({
            //         peerID: payload.userid,
            //         peer: peer,
            //     })
            //     setPeers(users => [...users, peer]);
            // });

            socket.on("offer", handleRecieveCall);

            socket.on("answer", handleAnswer);

            socket.on("ice-candidate", handleNewICECandidateMsg);
        });

    }, []);

    // const callUser = (userid) => {
    //     peerref.current = createPeer(userid);
    //     userstream.current.getTracks().forEach(track => peerref.current.addTrack(track, userstream.current));
    // }

    const createPeer = (usertosignnal, callerid) => {
        const peer = new RTCPeerConnection({
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
        });

        peer.onicecandidate = (e) => handleICECandidateEvent(e, usertosignnal);
        peer.onnegotiationneeded = () => handleNegotiationNeededEvent(usertosignnal, callerid);
        peer.addStream(userstream.current)
        return peer;
    }
    const addPeer = (socketid) => {
        const peer = new RTCPeerConnection({
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
        });

        peer.onicecandidate = (e) => handleICECandidateEvent(e, socketid);
        return peer;
    }

    //user A will call this
    const handleNegotiationNeededEvent = (usertosignnal, callerid) => {
        const { peer } = peerref.current.find(p => p.peerID === usertosignnal);
        console.log("Peer offer sender:", peer)
        peer.createOffer().then(offer => {
            return peer.setLocalDescription(offer);
        }).then(() => {
            const payload = {
                target: callerid,
                caller: usertosignnal,
                sdp: peer.localDescription
            };
            socket.emit("offer", payload);
        }).catch(e => console.log(e));
    }

    //user B will call this
    const handleRecieveCall = (incoming) => {
        console.log("Incoming", incoming, "Peerref", peerref.current)
        const { peer } = peerref.current.find(p => p.peerID === incoming.target);
        console.log("Peer Answer sender:", peer)
        const desc = new RTCSessionDescription(incoming.sdp);
        peer.setRemoteDescription(desc).then(() => {
            return
        }).then(() => {
            return peer.createAnswer();
        }).then(answer => {
            return peer.setLocalDescription(answer);
        }).then(() => {
            const payload = {
                target: incoming.caller,
                caller: incoming.target,
                sdp: peer.localDescription
            }
            socket.emit("answer", payload);
        })
    }

    //user A will call this
    const handleAnswer = (message) => {
        const { peer } = peerref.current.find(p => p.peerID === message.target);
        const desc = new RTCSessionDescription(message.sdp);
        peer.setRemoteDescription(desc).catch(e => console.log(e));
    }

    const handleICECandidateEvent = (e, usertosignal) => {
        if (e.candidate) {
            const payload = {
                target: usertosignal,
                candidate: e.candidate,
            }
            socket.emit("ice-candidate", payload);
        }
    }

    const handleNewICECandidateMsg = (incoming) => {
        console.log(incoming.target)
        const { peer } = peerref.current.find(p => p.peerID === incoming.target);
        const candidate = new RTCIceCandidate(incoming.candidate);
        peer.addIceCandidate(candidate)
            .catch(e => console.log(e));
    }

    const handleTrackEvent = (e) => {
        partnervideo.current.srcObject = e.streams[0];
    };

    return (
        <div>
            <video autoPlay ref={uservideo} />
            {peers.map((peer, index) => {
                return (
                    <Video key={index} peer={peer} />
                );
            })}
        </div>
    );
};

export default Room;