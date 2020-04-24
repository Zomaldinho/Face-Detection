import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="f3 white">{`${name} your current entry count is ${entries}`}</div>
      {/* <div className="f1 white">{``}</div> */}
    </div>
  );
};

export default Rank;
