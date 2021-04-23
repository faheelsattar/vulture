import React, { useState, useEffect } from "react";
import "./settingsform.css";
import { useSettings } from "../../Media/useSettings";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core";
import Filledbtn from "../../shared/filledbtn";

const Settingsform = (props) => {
  const useStyles = makeStyles((theme) => ({
    switch_track: {
      backgroundColor: "grey",
    },
    switch_base: {
      color: "grey",
      "&.Mui-disabled": {
        color: "grey",
      },
      "&.Mui-checked": {
        color: "#1ee36b",
      },
      "&.Mui-checked + .MuiSwitch-track": {
        backgroundColor: "#37ed7d",
      },
    },
  }));
  const classes = useStyles();

  const {
    audio,
    video,
    speaker,
    switchAudio,
    switchVideo,
    switchSpeaker,
    selectAudio,
    selectSpeaker,
    selectVideo,
    getDevices,
  } = useSettings();

  const [audiodev, setAudioDev] = useState([]);
  const [videodev, setVideoDev] = useState([]);
  const [speakerdev, setSpeakerDev] = useState([]);
  useEffect(async () => {
    const { audiodevices, videodevices, speakerdevices } = await getDevices();
    setAudioDev(audiodevices);
    setVideoDev(videodevices);
    setSpeakerDev(speakerdevices);
    console.log("audio devices", audiodevices);
    console.log("video devices", videodevices);
    console.log("speaker devices", speakerdevices);
    selectDevices(audiodevices, videodevices, speakerdevices);
  }, [audio, video, speaker]);

  const selectDevices = (audiodevices, videodevices, speakerdevices) => {
    if (audio && audiodevices.length > 0) {
      selectAudio(audiodevices[0].deviceid);
    } else {
      selectAudio("");
    }

    if (video && videodevices.length > 0) {
      selectVideo(videodevices[0].deviceid);
    } else {
      selectVideo("");
    }
    if (speaker && speakerdevices.length > 0) {
      selectSpeaker(speakerdevices[0].deviceid);
    } else {
      selectSpeaker("");
    }
  };
  const getAudioDevices = audiodev.map((data) => {
    return <option value={`${data.deviceid}`}>{data.deviceid}</option>;
  });
  const getVideoDevices = videodev.map((data) => {
    return <option value={`${data.deviceid}`}>{data.deviceid}</option>;
  });
  const getSpeakerDevices = speakerdev.map((data) => {
    return <option value={`${data.deviceid}`}>{data.deviceid}</option>;
  });

  const handleAudioChange = (e) => {
    console.log(e);
    selectAudio(e.target.value);
  };
  const handleVideoChange = (e) => {
    console.log(e);
    selectVideo(e.target.value);
  };
  const handleSpeakerChange = (e) => {
    console.log(e);
    selectSpeaker(e.target.value);
  };

  return (
    <form className="setting-form">
      <div className="inpt-inline">
        <div className="inpt-holder-hv">
          <span className="settings-label">Audio </span>
          <Switch
            checked={audio}
            classes={{
              track: classes.switch_track,
              switchBase: classes.switch_base,
            }}
            onChange={(e) => switchAudio(!audio)}
            name="audio"
          />
        </div>
        <div className="inpt-holder-hv">
          {audio && audiodev.length > 0 ? (
            <select
              className="device-selector"
              value={audiodev[0].deviceid}
              onChange={handleAudioChange}
            >
              {getAudioDevices}
            </select>
          ) : null}
        </div>
      </div>
      <div className="inpt-inline">
        <div className="inpt-holder-hv">
          <span className="settings-label">Video </span>
          <Switch
            checked={video}
            classes={{
              track: classes.switch_track,
              switchBase: classes.switch_base,
            }}
            onChange={(e) => switchVideo(!video)}
            name="video"
          />
        </div>
        <div className="inpt-holder-hv">
          {video && videodev.length > 0 ? (
            <select
              className="device-selector"
              value={videodev[0].deviceid}
              onChange={handleVideoChange}
            >
              {getVideoDevices}
            </select>
          ) : null}
        </div>
      </div>
      <div className="inpt-inline">
        <div className="inpt-holder-hv">
          <span className="settings-label">Speaker </span>
          <Switch
            checked={speaker}
            classes={{
              track: classes.switch_track,
              switchBase: classes.switch_base,
            }}
            onChange={(e) => switchSpeaker(!speaker)}
            name="speaker"
          />
        </div>
        <div className="inpt-holder-hv">
          {speaker && speakerdev.length > 0 ? (
            <select
              className="device-selector"
              value={speakerdev[0].deviceid}
              onChange={handleSpeakerChange}
            >
              {getSpeakerDevices}
            </select>
          ) : null}
        </div>
      </div>
      <div className="meeting-create-btn-holder">
        <div style={{ marginRight: "10px" }}>
          <Filledbtn
            className="meeting-back-btn"
            onClick={() => props.handleNextForm(false)}
          >
            Back
          </Filledbtn>
        </div>
        <div>
          <Filledbtn onClick={props.joinRoom}>Create</Filledbtn>
        </div>
      </div>
    </form>
  );
};

export default Settingsform;
