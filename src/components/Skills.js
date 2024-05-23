// Skills.js

import Skill from "./Skill";
import './Skills.css';


const Skills = () => {
  return (
    <div className="skills">
      <h2>Technical Skills</h2>
      <div className="skillsList">
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          alt="HTML icon"
          title="HTML5"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          alt="CSS icon"
          title="CSS3"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          alt="JS icon"
          title="JS"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          alt="REACT icon"
          title="REACT"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
          alt="ANGULAR icon"
          title="ANGULAR"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
          alt="JAVA icon"
          title="JAVA"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          alt="NODE icon"
          title="NODE.JS"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
          alt="SQL icon"
          title="SQL"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          alt="MONGODB icon"
          title="MONGODB"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-line.svg"
          alt="JENKINS icon"
          title="JENKINS"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg"
          alt="SELENIUM icon"
          title="SELENIUM"
        />

      </div>
    </div>
  );
};

export default Skills;
