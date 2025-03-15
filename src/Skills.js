import React from "react";
import Styles from "./skills.module.css";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa6";
import CountUp from "react-countup";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <FaJs />, percentage: 90 },
    { name: "React.js", icon: <FaReact />, percentage: 85 },
    { name: "Node.js", icon: <FaNodeJs />, percentage: 80 },
    { name: "HTML5", icon: <FaHtml5 />, percentage: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, percentage: 90 },
    { name: "Databases", icon: <FaDatabase />, percentage: 75 },
  ];

  return (
    <div className={Styles.skillsSection}>
      <h2 className={Styles.title}>⚡ Skills</h2>

      {/* Skill Bars */}
      <div className={Styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={Styles.skill}>
            <div className={Styles.skillHeader}>
              {skill.icon} <span>{skill.name}</span>
            </div>
            <div className={Styles.progressBar}>
              <div className={Styles.progress} style={{ width: `${skill.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Small Skill Counters */}
      <div className={Styles.counters}>
        <div className={Styles.counterBox}>
          <h3><CountUp start={0} end={10} duration={2} />+</h3>
          <p>Projects</p>
        </div>
        <div className={Styles.counterBox}>
          <h3><CountUp start={0} end={500} duration={2} />+</h3>
          <p>Commits</p>
        </div>
        <div className={Styles.counterBox}>
          <h3><CountUp start={0} end={3} duration={2} />+</h3>
          <p>Years Exp.</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
