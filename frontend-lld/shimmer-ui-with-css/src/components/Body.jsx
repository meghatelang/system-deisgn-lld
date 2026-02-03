import React, { useEffect, useState } from 'react';
import MemesCard from './MemesCard';
import Shimmer from './Shimmer';

const Body = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    const data = await fetch('https://meme-api.com/gimme/20');
    const json = await data.json();
    setMemes(json?.memes);
  };

  return (
    <div className="memes-card-container">
      {memes.length ? (
        memes?.map((meme, i) => <MemesCard key={i} data={meme} />)
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Body;
