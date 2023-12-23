import React from "react";
import "./Vision.css";
import vicon from "../assets/visionicon.png";
import micon from "../assets/missionicon.png";
import Card from "../Components/Card";

const Vision = () => {
  return (
    <>
      <div className="vis-main">
        <div className="vis-head">Our Objectives</div>
        <div className="vis-section">
          <Card
            src={vicon}
            title="Our Vision"
            body="The Computer Society of India (CSI) is a non-profit organization that aims to promote Information Technology (IT) as a profession. CSI's vision is 'IT for Masses'"
          />
          <Card
            src={micon}
            title="Our Mission"
            body="The mission of the CSI is to facilitate research,  career enhancement for all categories of IT professionals, while simultaneously inspiring and nurturing new entrants into the industry and helping them to integrate into the IT community."
          />
        </div>
      </div>
    </>
  );
};

export default Vision;
