import React from 'react';
import "./Info.css";

function Info({number, name, icon}) {
  return (
      <div className="info">
          <div className="info__data">
            <span className="info__data--number">{number}</span>
            <span className="info__data--name">{name}</span>
          </div>
          <div className="info__icon">
            <img className="info__icon--img" src={icon} alt="icon" />
          </div>
      </div>
  );
}

export default Info;
