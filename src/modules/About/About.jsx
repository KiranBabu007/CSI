/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import "./About.css";
import group from "../../assets/images/group.jpeg";
import workshop from "../../assets/images/workshop2.jpg";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div id="about">
      <div className="about">
        <div className="aboutMain">
          <div className="aboutSection hidden">
            <div className="aboutImg">
              <img src={group} alt="" />
            </div>
            <div className="aboutBody">
              <h2>About us</h2>
              <p>
                Welcome to the CSI chapter at St Joseph's College of Engineering
                and Technology, Palai. We are a tech community promoting
                learning, growth, and collaboration through various activities.
                Our goal is to spark curiosity, develop skills, and facilitate
                networking in the tech field. Come join us to discover the
                potential of technology and innovation at our CSI chapter.
              </p>
            </div>
          </div>
          <div className="aboutSection hidden">
            <div className="aboutBody">
              <h2>What is CSI ?</h2>
              <p>
                The Computer Society of India (CSI) is the largest organization
                of computer professionals in the country. Established on March
                6, 1965, CSI represents and supports the integrity, competence,
                and collaboration among its members. Through chapters and
                student branches, it organizes events like conferences,
                seminars, and workshops to promote learning, knowledge sharing,
                and networking. CSI also assists professionals in maintaining
                integrity, fostering partnerships, and contributing to the
                growth of the computing industry in India.
              </p>
            </div>
            <div className="aboutImg">
              <img src={workshop} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
