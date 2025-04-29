import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../assets/styles/Main.scss';
import WajahatImage from '../assets/images/WajahatImage.jpg';
import resumeUrl from '../assets/files/syed_wajahat.pdf';

function Main() {
  const toRotate = ["Syed Wajahat"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleType = () => {
      const fullText = toRotate[loopNum % toRotate.length];
      if (isDeleting && text.length === 1) {
        setIsDeleting(false);
        setLoopNum(n => n + 1);
        return;
      }
      const updated = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
      setText(updated);
      if (!isDeleting && updated === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      }
      setTypingSpeed(isDeleting ? 75 : 150);
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor(s => !s), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <>
      {/* 🔥 Fixed-position Download button */}
      

      {/* Your existing content */}
      <div className="container" id="home">
        
        <div className="about-section">
        <div
        style={{
          position: 'absolute',
          top: '72px',
          right: '20px',
          zIndex: 10,
        }}
      >
        <a
          href={resumeUrl}
          download="syed_wajahat.pdf"
          style={{
            textDecoration: 'none',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            borderRadius: '5px',
            fontSize: isMobile ? '0.8rem' : '1rem',
            fontWeight: 'bold',
            display: 'inline-block',
            textAlign: 'center',
          }}
        >
          Download Resume
        </a>
      </div>
          <div className="image-wrapper">
            <img src={WajahatImage} alt="Avatar" />
          </div>
          <div className="content">
            <div className="social_icons">
              <a href="https://github.com/syedwajahat01" target="_blank" rel="noreferrer">
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/syed-wajahat-husain-abdi-365259202/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
            <h1>
              <span
                style={{
                  whiteSpace: 'nowrap',
                  borderRight: showCursor ? "0.08em solid currentColor" : "none",
                  paddingRight: 2,
                  fontSize: isMobile ? '2.8rem' : undefined
                }}
              >
                {text}
              </span>
            </h1>
            <p>Senior Engineer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;



// .send(
//   'service_ua11yxc', // Replace with your EmailJS service ID
//   'template_m3xv4z9', // Replace with your EmailJS template ID
//   templateParams,
//   'lt62C_OmssLIsVa5g' // Replace with your EmailJS user ID (API key)
// )