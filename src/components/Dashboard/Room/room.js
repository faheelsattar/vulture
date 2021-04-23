import React, { useEffect, useRef, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as mediasoupclient from "mediasoup-client";
import { socketcontext } from "../../../context/socket";
import { useSettings } from "../Media/useSettings";
import "./room.css";
import RoomClient from "../Webrtc/RoomClient";

const Room = () => {
  const location = useLocation();
  const params = useParams();
  const { state } = location;
  const { roomname, username, roomdesc } = state;
  const { id } = params;
  let rc = useRef(null);
  let localmedia = useRef(null);
  let remotevideos = useRef(null);
  let remoteaudios = useRef(null);
  const socket = useContext(socketcontext);
  const { audio, video, speaker, audioid, videoid, speakerid } = useSettings();
  socket.request = function request(type, data = {}) {
    return new Promise((resolve, reject) => {
      socket.emit(type, data, (data) => {
        if (data.error) {
          reject(data.error);
        } else {
          resolve(data);
        }
      });
    });
  };
  useEffect(() => {
    if (rc.current && rc.current.isOpen()) {
      console.log("already connected to a room");
    } else {
      rc.current = new RoomClient(
        localmedia.current,
        remotevideos.current,
        remoteaudios.current,
        mediasoupclient,
        socket,
        id,
        username
      );
      //   if (audio) {
      //     rc.current.produce(RoomClient.mediaType.audio, audioid);
      //   }
      socket.on(
        "consumerClosed",
        function ({ consumer_id }) {
          console.log("closing consumer:", consumer_id);
          rc.current.removeConsumer(consumer_id);
        }.bind(this)
      );
  
      /**
       * data: [ {
       *  producer_id:
       *  producer_socket_id:
       * }]
       */
      socket.on(
        "newProducers",
        async function (data) {
          console.log("new producers", data);
          for (let { producer_id } of data) {
            await rc.current.consume(producer_id);
          }
          if (video) {
            rc.current.produce(RoomClient.mediaType.video, videoid);
          }
        }
      );
  
      socket.on(
        "disconnect",
        function () {
          rc.current.exit(true);
        }
      );
    }
  });

  const videoShare = () => {
    if (video) {
      rc.current.produce(RoomClient.mediaType.video, videoid);
    }
  };
  return (
    <div className="room-holder">
      <div id="videoMedia" className="hidden">
          <button onClick={videoShare}>share video</button>
        <h2>------local------</h2>
        <div id="localMedia" ref={localmedia}></div>
        <h2>-----remote-----</h2>
        <div id="remoteVideos" ref={remotevideos} className="container"></div>
        <div id="remoteAudios" ref={remoteaudios}></div>
      </div>
    </div>
  );
};
export default Room;
