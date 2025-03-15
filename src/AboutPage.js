import React from "react";
import "./AboutPage.css"; 
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa6"; 



const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>👨‍💻 About Me</h1>
      <p>
        Welcome to my personal blog! I'm <strong>Yamil Peréz</strong>, a passionate <strong>Software Developer</strong> 
        who loves to explore and share insights on <strong>web development, problem-solving, and tech trends.</strong>
      </p>

      <h2>🚀 Why I Started This Blog</h2>
      <p>
        This blog is my little corner of the internet where I document my journey, share my experiences, 
        and help others by providing valuable content on <strong>coding, software development, and personal growth.</strong>
      </p>

      <h2>✨ More About Me</h2>
      <ul className="about-list">
        <li>💻 I specialize in building scalable web applications.</li>
        <li>📚 I’m an avid reader, especially about <strong>software architecture and AI.</strong></li>
        <li>🎸 I love playing the bass guitar.</li>
        <li>✈️ I enjoy traveling and exploring new places.</li>
      </ul>

      <h2>📬 Let's Connect!</h2>
      <p>Feel free to reach out and connect with me on:</p>
      
      <ul className="social-links">
        <li>
          <a href="https://github.com/elyami600" className="social_link github" target="_blank" rel="noopener noreferrer">
            <FaGithub /> 
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/yamil-perez" className="social_link linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="mailto:your@email.com" className="social_link email">
            ✉️ 
          </a>
        </li>
      </ul>

      {/* ✅ Download My CV Section */}
      <div className="cv-section">
      <a href="/cv/YamilPerez_Resume_2025.pdf" download className="download-cv">
          <FaDownload className="cv-icon" /> Download My CV
        </a>
      </div>
    </div>
  );
};

export default AboutPage;

