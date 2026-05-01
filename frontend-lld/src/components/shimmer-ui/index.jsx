import React, { useEffect, useState } from "react";
import MemeDashboard from "./MemeDashboard";
import Shimmer from "../common/Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setMemes(json.memes);
  };

  return (
    <div className="flex flex-wrap">
      {memes.length ? <MemeDashboard data={memes} /> : <Shimmer />}
    </div>
  );
};

export default Body;
