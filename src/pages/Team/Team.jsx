import React from "react";
import "./Team.css";
import TeamCard from "../../Components/teamCard/teamCard";
import anandhu from "../../assets/Team/anandhu.png";
import ajaisankar from "../../assets/Team/ajaysankar.png";
import allwina from "../../assets/Team/allwina.png";
import vivek from "../../assets/Team/vivek.png";
import tomin from "../../assets/Team/tomin.png";
import anitha from "../../assets/Team/anitha.png";
import kennith from "../../assets/Team/kennith.png";
import saranya from "../../assets/Team/saranya.png";
import amalanilkumar from "../../assets/Team/amalanilkumar.png";
import thomas from "../../assets/Team/thomas.png";
import brisly from "../../assets/Team/brisly.png";
import noel from "../../assets/Team/noel.png";
import ashin from "../../assets/Team/ashin.png";
import ajayjohny from "../../assets/Team/ajayjohny.png";
import jovit from "../../assets/Team/jovit.png";
import anitta from "../../assets/Team/anitta.png";
import kiran from "../../assets/Team/kiran.png";
import albinsony from "../../assets/Team/albinsony.png";
import abin from "../../assets/Team/abin.png";
import akhilsankar from "../../assets/Team/akhilsankar.png";
import thomask from "../../assets/Team/thomask.png";
import parvathy from "../../assets/Team/parvathy.png";
import ashly from "../../assets/Team/ashly.png";
import alvinmanoj from "../../assets/Team/alvinmanoj.png";
import midhun from "../../assets/Team/midhun.png";
import aman from "../../assets/Team/aman.png";
import joel from "../../assets/Team/joel.png";
import angel from "../../assets/Team/angel.png";
import akhilnair from "../../assets/Team/akhilnair.png";
import sanjid from "../../assets/Team/sanjid.png";
import annmaria from "../../assets/Team/annmaria.png";
import siya from "../../assets/Team/siya.png";
import juna from "../../assets/Team/juna.png";
import malavika from "../../assets/Team/malavika.png";
import akash from "../../assets/Team/akash.png";
import ruth from "../../assets/Team/ruth.png";
import ayush from "../../assets/Team/ayush.png";
import sweety from "../../assets/Team/sweety.png";
import allen from "../../assets/Team/allen.png";
import seion from "../../assets/Team/seion.png";
import rohan from "../../assets/Team/roshan.png";
import binosir from "../../assets/Team/binosir.png";
import aavani from "../../assets/Team/aavani.png";
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
            <TeamCard src={binosir} name="Bino Thomas" position="Chapter Adviser"/>
            <TeamCard src={allwina} name="Allwina Anna Soy Jose" position="Chair"/>
            <TeamCard src={ajaisankar} name="Ajai Sankar Hareesh" position="Vice Chair"/>
            <TeamCard src={vivek} name="Vivekanand R" position="Secretary"/>
            <TeamCard src={tomin} name="Tomin Joy" position="Treasurer"/>
       </div>
        </div>

        <div className="Event-team">
          <div className="Team-title">
            <p>EVENT TEAM</p>
          </div>
          <div className="Team-cards">
            <TeamCard src={anitha} name="Anitha P Benny" position="Event Lead"/>
            <TeamCard src={kennith} name="Kennith Joseph" position="Event Co-Lead"/>
            <TeamCard src={saranya} name="Saranya S Nair" position="Event Team"/>
            <TeamCard src={amalanilkumar} name="Amal Anilkumar" position="Event Team"/>
            <TeamCard src={thomas} name="Thomas Jose"position="Event Team"
            />
            <TeamCard src={brisly} name="Brisly Binoy" position="Event Team"/>
            <TeamCard src={noel} name="Noel Roy" position="Event Team" />
            <TeamCard src={ashin} name="Ashin Sabu Mathew" position="Event Team"/>
          </div>
        </div>
        <div className="Web-team">
          <div className="Team-title">
            <p>WEB TEAM</p>
          </div>
          <div className="Team-cards">
            <TeamCard src={ajayjohny} name="Ajay Johny" position="Web Lead"/>
            <TeamCard src={jovit} name="Jovit Mathew" position="Web Co-Lead"/>
            <TeamCard src={anitta} name="Anitta Siby" position="Developer"/>
            <TeamCard src={kiran} name="Kiran Babu" position="Developer"/>
            <TeamCard src={albinsony} name="Albin Sony" position="Developer"/>
            <TeamCard src={abin} name="Abin Thomas" position="Developer"/>
          </div>
        </div>
        <div className="Media-team">
          <div className="Team-title">
            <p>MEDIA TEAM</p>
          </div>
          <div className="Team-cards">
            <TeamCard src={akhilsankar} name="Akhil Sankar S" position="Media Lead"/>
            <TeamCard src={thomask} name="Thomas K Binu" position="Media Co-Lead"/>
            <TeamCard src={parvathy} name="Parvathy V Nair" position="Media Team"/>
            <TeamCard src={ashly} name="Ashly Rose Antony" position="Media Team"/>
            <TeamCard src={alvinmanoj} name="Alvin Manoj" position="Media Team"/>
            <TeamCard src={midhun} name="Midhun Jomy C" position="Media Team"/>
          </div>
        </div>
        <div className="Design-team">
          <div className="Team-title">
            <p>DESIGN TEAM</p>
          </div>
          <div className="Team-cards">
            <TeamCard src={anandhu} name="Anandhu Unnikrishnan" position="Design Lead"/>
            <TeamCard src={aman} name="Aman Kappoore" position="Design Co-Lead"/>
            <TeamCard src={angel} name="Angel Theresa Paul" position="Designer"/>
            <TeamCard src={joel} name="Joel Varghese" position="Designer"/>
            <TeamCard src={akhilnair} name="Akhil Nair" position="Designer"/>
          </div>
        </div>
        <div className="Content-team">
          <div className="Team-title">
            <p>CONTENT TEAM</p>
          </div>
          <div className="Team-cards">
            <TeamCard src={annmaria} name="Ann Maria Sabu" position="Content Lead"/>
            <TeamCard src={sanjid} name="Sanjid S" position="Content Co-Lead"/>
            <TeamCard src={siya} name="Siya Varghese" position="Content Writier"/>
            <TeamCard src={aavani} name="Aavani Shaj" position="Content Writier"/>
            <TeamCard src={juna} name="Juna Teres Martin" position="Content Writier"/>
            <TeamCard src={malavika} name="Malavika Anilkumar" position="Content Writier"/>
          </div>
        </div>
        <div className="Membership-team">
          <div className="Team-title">
            <p>MEMBERSHIP TEAM</p>
          </div>
          <div className="Team-cards">
            <TeamCard src={sweety} name="Sweety Sony" position="Membership Lead"/>
            <TeamCard src={ayush} name="Ayush Krishna" position="Membership Co-Lead"/>
            <TeamCard src={akash} name="Akash Benny" position="Membership Team"/>
            <TeamCard src={ruth} name="Ruth Susan Issac" position="Membership Team"/>
            <TeamCard src={allen} name="Allen Alex Alaney" position="Membership Team"/>
            <TeamCard src={seion} name="Seion Shoji Antony" position="Membership Team"/>
            <TeamCard src={rohan} name="Rohan Joshy" position="Membership Team"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
