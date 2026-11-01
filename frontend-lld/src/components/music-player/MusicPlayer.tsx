import React, { useEffect, useState } from "react";
import "./music-player.css";

const data = [
  {
    name: "Song A",
    duration: 3000,
  },
  {
    name: "Song B",
    duration: 4000,
  },
];

const MusicPlayer = () => {
  const [curSongIdx, setCurSongIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (curSongIdx > data.length - 1) return;
      console.log("playing song", data[curSongIdx]?.name);

      setCurSongIndex((prevIndex) => prevIndex + 1);
    }, data[curSongIdx]?.duration);

    return () => {
      clearTimeout(timer);
    };
  }, [curSongIdx]);

  return (
    <div>
      <h4>Music Player</h4>
      {data?.map((song, i) => (
        <div className="songs-list" key={i}>
          <div>{song?.name}</div>
          <div>{song.duration}</div>
        </div>
      ))}
    </div>
  );
};

export default MusicPlayer;
