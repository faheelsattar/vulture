import React, { useState, useContext } from "react";
import "./joinform.css";
import { socketcontext } from "../../../../context/socket";
import { useHistory } from "react-router-dom";
import Settingsform from "./settingsform";
import Filledbtn from "../../shared/filledbtn";

const Joinform = () => {
  const [next, setNext] = useState(false);
  const [roomid, setRoomId] = useState("");
  const [username, setUserName] = useState("");
  const history = useHistory();
  const socket = useContext(socketcontext);
  const handleNextForm = (value) => {
    setNext(value);
  };

  const joinRoom = (e) => {
      history.push(`/room/${roomid}`, {
        roomname: "kuch bhi",
        username: username,
        roomdesc: "kuch bhi",
      });
  };

  return (
    <div className="join-form-holder">
      {!next ? (
        <form>
          <div className="inpt-holder">
            <input
              type="text"
              className="inpt-meeting"
              placeholder="room id"
              onChange={(e) => setRoomId(e.target.value)}
            />
          </div>
          <div className="inpt-holder">
            <input
              type="text"
              className="inpt-meeting"
              placeholder="user name"
              onChange={(e) => setUserName(e.target.value)}
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

export default Joinform;
