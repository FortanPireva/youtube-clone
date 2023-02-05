import { HtmlHTMLAttributes, useEffect, useRef } from "react";
import videojs from "video.js";
import { addVideoView } from "../utils/api-client";

interface VideoPlayerProps {
  video: {
    id: string;
    url: string;
    thumbnail: string;
  };
}
const VideoPlayer = ({ video }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { id, url, thumbnail } = video;

  useEffect(() => {
    if (!videoRef.current) return;
    const vjsPlayer = videojs(videoRef.current);

    vjsPlayer.poster(thumbnail);
    vjsPlayer.src(url);
    (vjsPlayer as any).on("ended", () => {
      addVideoView(id);
    });
  }, [id, thumbnail, url]);
  return (
    <div data-vjs-player>
      <video
        controls
        ref={videoRef}
        className="vide-js vjs-fluid vjs-big-play-centered"
      />
    </div>
  );
};

export default VideoPlayer;
