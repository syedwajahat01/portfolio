import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import { faReact } from "@fortawesome/free-brands-svg-icons";

const languages: string[] = [
  "Java", "JavaScript", "C++", "HTML5", "CSS"
];

const frameworksAndLibraries: string[] = [
  "Spring Boot", "React.js", "Bootstrap", "Material UI"
];

const databasesAndTools: string[] = [
  "PostgreSQL", "MariaDB"
];

const other: string[] = [
  "RESTful APIs", "Kafka", "Git", "Docker", "Microservices", "Maven", "Gradle",
  "XML", "JSON", "Postman", "Swagger",  "SonarQube", "JPA", "Hibernate", "GitHub Copilot"
];

function Skills() {
  // uniform chip width increased to 140px
  const chipSX = {
    width: 140,
    height: 32,
    justifyContent: 'center'
  };

  return (
    <div id="skills">
      <div className="skills-container">
        <h1>Technical Skills</h1>
        <div
          className="skills-grid"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            width: '100%',
          }}
        >
          <div className="skill">
            <div className="flex-chips" style={{ display: 'block' }}>
              <span className="chip-title">Languages:</span>
              {languages.map((label, index) => (
                <Chip
                  key={index}
                  className='chip'
                  label={label}
                  sx={chipSX}
                />
              ))}
            </div>
          </div>
          
          <div className="skill">
            <div className="flex-chips" style={{ display: 'block' }}>
              <span className="chip-title">Frameworks and Libraries:</span>
              {frameworksAndLibraries.map((label, index) => (
                <Chip
                  key={index}
                  className='chip'
                  label={label}
                  sx={chipSX}
                />
              ))}
            </div>
          </div>

          <div className="skill">
            <div className="flex-chips" style={{ display: 'block' }}>
              <span className="chip-title">Databases:</span>
              {databasesAndTools.map((label, index) => (
                <Chip
                  key={index}
                  className='chip'
                  label={label}
                  sx={chipSX}
                />
              ))}
            </div>
          </div>

          <div className="skill">
            <div className="flex-chips" style={{ display: 'block' }}>
              <span className="chip-title">Miscellaneous:</span>
              {other.map((label, index) => (
                <Chip
                  key={index}
                  className='chip'
                  label={label}
                  sx={chipSX}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
