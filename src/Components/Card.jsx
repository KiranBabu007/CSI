import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div>
      <div className="vis-box">
        <div className="vis-icon">
          <img src={props.src} alt="vision icon" />
        </div>
        <div className="vis-box-head">{props.title}</div>
        <div className="vis-box-body">
          <p>{props.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
