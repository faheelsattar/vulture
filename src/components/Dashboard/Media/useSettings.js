import useMeetingSettings from "../../Stores/meetingsettings";

export const useSettings = () => {
  const audio = useMeetingSettings((state) => state.audio);
  const video = useMeetingSettings((state) => state.video);
  const speaker = useMeetingSettings((state) => state.speaker);
  const setAudio = useMeetingSettings((state) => state.setAudio);
  const setVideo = useMeetingSettings((state) => state.setVideo);
  const setSpeaker = useMeetingSettings((state) => state.setSpeaker);
  const audioid = useMeetingSettings((state) => state.audioid)
  const videoid = useMeetingSettings((state) => state.videoid)
  const speakerid = useMeetingSettings((state) => state.speakerid)
  const setAudioId = useMeetingSettings((state) => state.setAudioId);
  const setVideoId = useMeetingSettings((state) => state.setVideoId);
  const setSpeakerId = useMeetingSettings((state) => state.setSpeakerId);
  const switchAudio = (value) => {
    setAudio(value);
  };

  const switchVideo = (value) => {
    setVideo(value);
  };

  const switchSpeaker = (value) => {
    setSpeaker(value);
  };

  const selectSpeaker = (value) => {
    setSpeakerId(value);
  };

  const selectAudio = (value) => {
    setAudioId(value);
  };

  const selectVideo = (value) => {
    setVideoId(value);
  };

  const getDevices = async () => {
    const audiodevices = [];
    const videodevices = [];
    const speakerdevices = [];
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      console.log("enumerateDevices() not supported.");
      return;
    }
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      devices.forEach((device) => {
        if (device.kind === "videoinput") {
          videodevices.push({
            deviceid: device.groupId,
          });
        } else if (device.kind === "audioinput") {
          audiodevices.push({
            deviceid: device.groupId,
          });
        } else if (device.kind === "audiooutput") {
          speakerdevices.push({
            deviceid: device.groupId,
          });
        }
      });
    } catch (err) {
      console.log(err);
    }

    return {
      audiodevices,
      videodevices,
      speakerdevices,
    };
  };

  return {
    audio,
    video,
    speaker,
    audioid,
    videoid,
    speakerid,
    switchAudio,
    switchVideo,
    switchSpeaker,
    selectAudio,
    selectSpeaker,
    selectVideo,
    getDevices,
  };
};
