import React from "react";

const MemeDashboard = (props) => {
  const { data = [] } = props;

  return data.map((meme, i) => (
    <div key={i} className="p-5 m-5 border border-black rounded-lg">
      <img className="w-64 h-64" alt="meme" src={meme?.url} />
      <p>{meme?.author}</p>
    </div>
  ));
};

export default MemeDashboard;
