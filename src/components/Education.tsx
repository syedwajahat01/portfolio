import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import '../assets/styles/Expertise.scss';

function Education() {
    const educationItems = [
      {
        institution: "Integral University",
        degree: "B.Tech in Computer Science",
        location: "Lucknow, India",
        duration: "2016 - 2020",
        score: "CGPA: 7.96"
      },
      {
        institution: "Lucknow Christian College",
        degree: "XII, UP Board",
        location: "Lucknow, India",
        duration: "2014 - 2015",
        score: "Grade: 64%"
      },
      {
        institution: "Mufed Model Public School",
        degree: "X, UP Board",
        location: "Lucknow, India",
        duration: "2012 - 2013",
        score: "Grade: 83%"
      }
    ];
  
    return (
      <div id="education">
        <div className="skills-container">
          <h1>Education</h1>
          <div className="skills-grid">
            {educationItems.map((edu, index) => (
              <div className="skill" key={index}>
                <FontAwesomeIcon icon={faGraduationCap} size="3x" />
                <h3>{edu.degree}</h3>
                <p><strong>{edu.institution}</strong></p>
                <p>{edu.location}</p>
                <p>{edu.duration}</p>
                <p>{edu.score}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Education;