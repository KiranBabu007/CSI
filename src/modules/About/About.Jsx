/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import "./About.css";

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
    <>
      <div className="about">
        <div className="aboutMain">
          <div className="aboutSection hidden">
            <div className="aboutImg">
              <img src="" alt="" />
            </div>
            <div className="aboutBody">
              <h2>About us</h2>
              <p>
                Welcome to the Computer Society of India (CSI) chapter at St //
                Joseph's College of Engineering and Technology, Palai. We are a
                // community dedicated to technology and innovation. Our chapter
                // provides a platform for tech enthusiasts to learn, grow, and
                // collaborate through workshops, seminars, and events. We aim
                to // foster curiosity, enhance skills, and create networking //
                opportunities within the tech community. Join us as we explore
                // the endless possibilities of technology and innovation at St
                // Joseph's College of Engineering and Technology, Palai's CSI
                // chapter.
              </p>
            </div>
          </div>
          <div className="aboutSection hidden">
            <div className="aboutBody">
              <h2>What is CSI ?</h2>
              <p>
                The Computer Society of India (CSI) is the largest organization
                // of computer professionals in India. It was established on
                March // 6, 1965, and has grown to represent the nation's
                computer // professionals. CSI is dedicated to maintaining the
                integrity and // competence of the computing profession and
                promoting // collaboration among its members. It operates
                through chapters // and student branches, organizing
                conferences, seminars, and // workshops to encourage learning,
                knowledge sharing, and // networking. CSI also supports
                professionals in maintaining their // integrity and fostering
                partnerships, contributing to the growth // of the computing
                industry in India.
              </p>
            </div>
            <div className="aboutImg">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
