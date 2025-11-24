import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import '../assets/styles/Expertise.scss';

const highlights = [
  "TCS CodeVita: Ranked 5,820th out of 55,654 participants",
  "Udemy Certification: Certified in Web Development",
  "Hero MotoCorp Campus Challenge: Top 60 among 32,000 teams",
  "Digipodium Certification: Proficient in Data Visualization",
  "Founder & Member, IUCC Programming Club (2018–2020)",
  "Chief Coordinator, Enigma IT Quiz at the University’s Annual Tech-fest (2018 & 2019)"
];

function Highlights() {
  return (
    <div id="highlights">
      <div className="skills-container">
        <h1>Highlights</h1>
        <div className="skills-grid">
          {highlights.map((text, index) => (
            <div className="skill" key={index}>
              <FontAwesomeIcon icon={faTrophy} size="2x" />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Highlights;
