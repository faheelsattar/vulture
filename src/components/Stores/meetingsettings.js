import create from "zustand";
import { devtools } from "zustand/middleware";
const useMeetingSettings = create(
  devtools((set) => ({
    audio: true,
    video: true,
    speaker: true,
    audioid: "",
    videoid: "",
    speakerid: "",
    setAudio: (value) => set((state) => ({ audio: value })),
    setVideo: (value) => set((state) => ({ video: value })),
    setSpeaker: (value) => set((state) => ({ speaker: value })),
    setAudioId: (value) => set((state) => ({ audioid: value })),
    setVideoId: (value) => set((state) => ({ videoid: value })),
    setSpeakerId: (value) => set((state) => ({ speakerid: value })),
  }))
);

export default useMeetingSettings;
