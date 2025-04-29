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
            <h4 className="vertical-timeline-element-subtitle">Tata Elxsi | Jio - BP</h4>

            <ul className="list-disc pl-5 text-gray-700 mt-3 space-y-2">
              <li>Developed a low-code platform allowing API registration via intuitive forms.</li>
              <li>Integrated Kafka for real-time data streaming, with dynamic consumption/production logic and automated scheduling.</li>
              <li>Built a fund allocation feature using a payment gateway to transfer funds directly to managers' accounts.</li>
              <li>Implemented trip financing and trip card functionalities for secure, cashless fuel/non-fuel transactions for drivers.</li>
              <li>Designed and built transaction reporting with consolidated and date-filtered financial insights.</li>
              <li><strong>Technologies:</strong> Java, Spring Boot, PostgreSQL, Microservices, Kafka, Docker</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2022 - Dec 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Criterion Tech | Medvantage (Healthcare Project)</h4>

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
            <h4 className="vertical-timeline-element-subtitle">Tata Consultancy Services | Dupont</h4>
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