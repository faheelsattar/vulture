import React, { useState, useMemo, useContext } from "react";
import Filledbtn from "../../shared/filledbtn";
import "./meetingform.css";
import { socketcontext } from "../../../../context/socket";
import { useHistory } from "react-router-dom";
import Settingsform from "./settingsform";
const Meetingform = () => {
  const [next, setNext] = useState(false);
  const [roomname, setRoomName] = useState("");
  const [username, setUserName] = useState("");
  const [roomdesc, setRoomDesc] = useState("");
  const history = useHistory();
  const socket = useContext(socketcontext);
  const handleNextForm = (value) => {
    setNext(value);
  };
  const joinRoom = (e) => {
    socket.emit("room-id", ({ roomid }) => {
      console.log(roomid);
      history.push(`/room/${roomid}`, {
        roomname: roomname,
        username: username,
        roomdesc: roomdesc,
      });
    });
  };

  return (
    <div className="meeting-form-holder">
      {!next ? (
        <form className="meeting-form">
          <div className="inpt-inline">
            <div className="inpt-holder-hv">
              <input
                type="text"
                className="inpt-meeting room-name-inpt"
                placeholder="room name"
                onChange={(e) => setRoomName(e.target.value)}
              />
            </div>
            <div className="inpt-holder-hv">
              <input
                type="text"
                className="inpt-meeting usr-name-inpt"
                placeholder="user name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="inpt-holder">
            <textarea
              type="text"
              className="inpt-meeting room-desc-inpt"
              placeholder="room description"
              onChange={(e) => setRoomDesc(e.target.value)}
            />
          </div>
          <div className="inpt-holder">
            <Filledbtn onClick={() => handleNextForm(true)}>Next</Filledbtn>
          </div>
        </form>
      ) : (
        <Settingsform joinRoom={joinRoom} handleNextForm={handleNextForm} />
      )}
    </div>
  );
};

export default Meetingform;
