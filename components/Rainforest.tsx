"use client";
import React, { useState, useRef, useCallback } from "react";

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#121212"
    stroke="#121212"
    viewBox="0 0 1920 1920"
  >
    <path
      fillRule="evenodd"
      d="M1129.432 113v1694.148H936.638l-451.773-451.773h-315.45C76.01 1355.375 0 1279.365 0 1185.96V734.187c0-93.404 76.01-169.414 169.415-169.414h315.45L936.638 113h192.794Zm-112.943 112.943h-33.093l-418.68 418.68v630.901l418.68 418.68h33.093V225.944Zm655.488 135.114C1831.904 521.097 1920 733.77 1920 960.107c0 226.226-88.096 438.898-248.023 598.938l-79.851-79.85c138.694-138.695 214.93-323.018 214.93-519.087 0-196.183-76.236-380.506-214.93-519.2Zm-239.112 239.745c95.663 97.018 148.294 224.644 148.294 359.272s-52.631 262.254-148.294 359.272l-80.529-79.286c74.769-75.785 115.88-175.175 115.88-279.986 0-104.811-41.111-204.201-115.88-279.986Zm-981.092 76.914H169.415c-31.06 0-56.472 25.3-56.472 56.471v451.773c0 31.172 25.412 56.472 56.472 56.472h282.358V677.716Z"
    />
  </svg>
);

const PauseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#121212"
    stroke="#121212"
    viewBox="0 0 1920 1920"
  >
    <path
      fillRule="evenodd"
      d="M1129.432 113v1694.148H936.638l-451.773-451.773h-315.45c-92.47 0-167.893-74.498-169.392-166.618L0 1185.96V734.187c0-92.47 74.498-167.892 166.618-169.392l2.797-.022h315.45L936.638 113h192.794Zm-112.943 112.943h-33.093l-418.68 418.68v630.901l418.68 418.68h33.093V225.944Zm823.662 411.78L1920 717.571l-242.372 242.372L1920 1202.428l-79.85 79.85-242.484-242.372-242.372 242.372-79.85-79.85 242.372-242.484-242.371-242.372 79.85-79.85 242.37 242.372 242.486-242.372ZM451.773 677.715H169.415c-30.749 0-55.963 24.796-56.464 55.538l-.008.933v451.773c0 30.86 24.907 55.965 55.542 56.464l.93.008h282.358V677.716Z"
    />
  </svg>
);
function Rainforest() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = useCallback(() => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-10 right-0">
      <audio
        ref={audioRef}
        src="../assets/rainforest.mp3"
        autoPlay={isPlaying}
        loop
      >
        Your browser does not support the
        <code>audio</code> element
      </audio>
      <button
        aria-label={isPlaying ? "Pause" : "Play"}
        title={isPlaying ? "Pause" : "Play"}
        onClick={togglePlay}
        className="h-8 w-8 rounded-sm bg-white p-2"
      >
        {isPlaying ? <PlayIcon /> : <PauseIcon />}
      </button>
    </div>
  );
}

export default Rainforest;
