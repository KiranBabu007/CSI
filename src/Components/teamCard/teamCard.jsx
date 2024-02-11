import React from "react";
import "./teamCard.css";

const TeamCard = (props) => {
  return (
    <div className="teamCard-main">
      <div className="teamCard-box">
        <img src={props.src} alt="Image" />
      </div>
      <div className="teamCard-name">{props.name}</div>
      <div className="teamCard-position">{props.position}</div>
    </div>
  );
};

export default TeamCard;
