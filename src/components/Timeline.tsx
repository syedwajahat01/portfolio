import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="workExperience">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jan 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a href="https://www.tataelxsi.com/" target="_blank" rel="noopener noreferrer">
                Tata Elxsi
              </a> |
              <a href="https://www.jiobp.com/" target="_blank" rel="noopener noreferrer">
                Jio - BP
              </a>
            </h4>

            <ul className="list-disc pl-5 text-gray-700 mt-3 space-y-2">
              <li>Developed alow-code platform enabling users to register APIs via intuitive forms; integrated Kafka for real-time data streaming,
                consumption, production, and implemented scheduling for automated API requests with dynamic start/stop controls.</li>
              <li>Developed a fund allocation feature via the payment gateway, enabling seamless transfers to the manager’s account.</li>
              <li>Developed and maintained Carrier Management, Contract Management, and Transplanner Management microservices to en
                hance system scalability, performance, and operational efficiency.</li>
              <li>Implemented trip financing and trip card functionalities, enabling managers to allocate funds directly to drivers’ trip cards for
                secure, cashless fuel and non-fuel purchases related to assigned vehicles.</li>
              <li>Designed and built transaction reporting with consolidated and date-range-based insights for enhanced financial tracking.</li>
              <li><strong>Technologies:</strong> Java, Spring Boot, PostgreSQL, OracleDB, Microservices, Kafka, Docker, SonarQube, Swagger</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2022 - Dec 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a href="https://criteriontechnologies.com/" target="_blank" rel="noopener noreferrer">
                Criterion Tech
              </a> |
              <a href="https://medvantage.tech/" target="_blank" rel="noopener noreferrer">
                Medvantage (Healthcare Project)
              </a>
            </h4>

            <ul className="list-disc pl-5 text-gray-700 mt-3 space-y-2">
              <li>Contributed to securing ONC certification for Medvantage software, enabling market launch in the USA.</li>
              <li>Engineered back-end integration of FHIR (Fast Healthcare Interoperability Resources) and HL7 standards for enhanced healthcare interoperability.</li>
              <li>Developed RESTful APIs and integrated them with front-end applications for efficient communication and seamless user experiences.</li>
              <li>Built a real-time group chat system for simultaneous user communication across multiple clients.</li>
              <li>Implemented email integration to streamline patient data sharing and communication within the system, ensuring HIPAA compliance.</li>
              <li><strong>Technologies:</strong> Java, Spring Boot, PostgreSQL, HTML5, CSS3, JavaScript, React.js, Bootstrap</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2021 - Aug 2022"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Assistant System Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a href="https://www.tcs.com/" target="_blank" rel="noopener noreferrer">
                Tata Consultancy Services
              </a> |
              <a href="https://www.dupont.com/" target="_blank" rel="noopener noreferrer">
                Dupont
              </a>
            </h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Developed RESTful APIs using Java and Spring Boot for seamless backend integration.</li>
              <li>Designed and implemented user stories to build robust and scalable services.</li>
              <li>Integrated Java apps with databases using Hibernate/JPA for efficient data access.</li>
            </ul>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;