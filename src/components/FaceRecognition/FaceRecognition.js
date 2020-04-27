import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, box }) => {
  return (
    <div className="center pa3">
      <div className="absolute mt2">
        {Array.from(box).map((value) => {
          return (
            <div
              className="bounding-box"
              style={{
                top: value.topRow,
                right: value.rightCol,
                bottom: value.buttomRow,
                left: value.leftCol,
              }}
            ></div>
          );
        })}
        <img id="hoba" width="500px" height="auto" src={imageURL} alt="" />
      </div>
    </div>
  );
};

export default FaceRecognition;
