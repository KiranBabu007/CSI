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
          <div className="Core-team-head">
            <p>CORE TEAM</p>
          </div>
          <div className="Core-cards">
            <TeamCard
              src="anandhu"
              name="Anandhu Unnikrishnan"
              position="Design Lead"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
