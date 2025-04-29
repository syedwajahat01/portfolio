import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email'; // Import Email icon
import PhoneIcon from '@mui/icons-material/Phone'; // Import Phone icon
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/syedwajahat01" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/syed-wajahat-husain-abdi-365259202/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:swhabdi@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a> {/* Replace with your email */}
        <a href="tel:+916391694444" target="_blank" rel="noreferrer"><PhoneIcon/></a> {/* Replace with your phone number */}
      </div>
      <p>Crafted by <a href="https://github.com/syedwajahat01/portfolio" target="_blank" rel="noreferrer">Syed Wajahat</a> – code, coffee & creativity ☕️💻</p>

      {/* <p>A portfolio designed & built by <a href="https://github.com/syedwajahat01/springbootwebapp" target="_blank" rel="noreferrer">Syed Wajahat</a> with 💜</p> */}
    </footer>
  );
}

export default Footer;