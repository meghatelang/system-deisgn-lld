import React from 'react';

const Shimmer = () => {
  return Array(15)
    .fill(0)
    .map((i) => <div key={i} className="shimmer-ui"></div>);
};

export default Shimmer;
