import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchMemes();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const fetchMemes = async () => {
    setShowShimmer(true);
    const data = await fetch('https://meme-api.com/gimme/20');
    const json = await data.json();
    setShowShimmer(false);
    setMemes((memes) => [...memes, ...json.memes]);
  };

  const handleScroll = () => {
    // scrollY - how much we have scrolled
    // innerHeight - visible section of the window
    // scrollHeight - total height of the web page
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMemes();
    }
  }

  return (
    <div className="flex flex-wrap">
      {memes.map((meme) => (
        <div className="p-5 m-5 border border-black rounded-lg">
        <img className="w-24 h-24" alt="meme" src={meme?.url} />
        <p>{meme?.author}</p>
      </div>
      ))
      }
      {showShimmer && <Shimmer />}
    </div>
  );
};

export default Body;
