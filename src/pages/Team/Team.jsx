import React from "react";
import "./Team.css";
import TeamCard from "../../Components/teamCard/teamCard";
import anandhu from "../../assets/Team/anandhu.png";

const Team = () => {
  return (
    <>
      <div className="Team-Nav"></div>
      <div className="Team-main">
        <div className="Team-header-box">
          <div className="Team-subhead">
            <div className="Team-subhead-box">WHO</div>
            <div className="Team-subhead-box">WE</div>
            <div className="Team-subhead-box">ARE</div>
          </div>
          <div className="Team-head">
            <p>MEET OUR EXECOM MEMBERS</p>
          </div>
        </div>

        <div className="Core-team">
          <div className="Team-title">
            <p>CORE TEAM</p>
          </div>
          <div className="Team-cards">
            <TeamCard
              src={anandhu}
              name="Anandhu Unnikrishnan"
              position="Design Lead"
            />
            <TeamCard src="" name="Dummy Name" position="Design Lead" />
            <TeamCard src="" name="Dummy Name" position="Design Lead" />
            <TeamCard src="" name="Dummy Name" position="Design Lead" />
          </div>
        </div>

        <div className="Event-team">
          <div className="Team-title">
            <p>EVENT TEAM</p>
          </div>
          <div className="Team-cards">
            <TeamCard
              src={anandhu}
              name="Anandhu Unnikrishnan"
              position="Design Lead"
            />
            <TeamCard src="" name="Dummy Name" position="Design Lead" />
            <TeamCard src="" name="Dummy Name" position="Design Lead" />
            <TeamCard src="" name="Dummy Name" position="Design Lead" />
            <TeamCard
              src={anandhu}
              name="Anandhu Unnikrishnan"
              position="Design Lead"
            />
            <TeamCard src="" name="Dummy Name" position="Design Lead" />
            <TeamCard src="" name="Dummy Name" position="Design Lead" />
            <TeamCard src="" name="Dummy Name" position="Design Lead" />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Team;
