import React from 'react';

const MemesCard = (props) => {
  const { url, author } = props.data;
  return (
    <div className="memes-card">
      <img className="memes-card-gif" src={url} />
      <p>{author}</p>
    </div>
  );
};

export default MemesCard;
