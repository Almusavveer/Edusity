import React from "react";
import "./Video_player.css";
import { images } from "../../assets/images";
import { useReducer } from "react";

const Video_player = ({ play, setPlay }) => {
  const player = useReducer(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlay(false);
    }
  };
  return (
    <div
      className={`video_player ${play ? "" : "hide"}`}
      ref={player} 
      onClick={closePlayer}
    >
      <video src={images.video} autoPlay controls></video>
    </div>
  );
};

export default Video_player;
