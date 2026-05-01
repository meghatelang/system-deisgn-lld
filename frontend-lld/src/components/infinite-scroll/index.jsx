import React, { useEffect, useState } from "react";
import Shimmer from "../common/Shimmer";

const Body = ({ scrollRef }) => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchMemes();

    const el = scrollRef.current;

    if (!el) return;

    el.addEventListener("scroll", handleScroll);

    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchMemes = async () => {
    setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setShowShimmer(false);
    setMemes((memes) => [...memes, ...json.memes]);
  };

  const handleScroll = () => {
    // scrollY - how much we have scrolled
    // innerHeight - visible section of the window
    // scrollHeight - total height of the web page
    const el = scrollRef.current;

    if (!el) return;

    const { scrollTop, clientHeight, scrollHeight } = el;
    if (scrollTop + clientHeight >= scrollHeight) {
      fetchMemes();
    }
  };

  return (
    <div className="flex flex-wrap">
      {memes.map((meme, i) => (
        <div key={i} className="p-5 m-5 border border-black rounded-lg">
          <img className="w-24 h-24" alt="meme" src={meme?.url} />
          <p>{meme?.author}</p>
        </div>
      ))}
      {showShimmer && <Shimmer />}
    </div>
  );
};

export default Body;
