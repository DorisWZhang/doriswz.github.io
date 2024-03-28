import React from 'react'
import Headshot from "../assets/Headshot.jpg";
import "../styles/AboutMe.css"
import Resume from "../assets/Zhang_Doris_Resume.pdf";



// open resume pdf in diff window
function onResumeClick() {
  window.open(Resume);
}

function AboutMe() {
  return (
    <div className="aboutme">
      <div className="headshot">
        <img src={Headshot} />
      </div>
      <div className="text">
        <h2 className="header">Hello!
        <span className="emoji">👋</span>
        </h2>
        <p>
          <b>My name is Doris.</b> I'm a first-year Science student at the University of British Columbia with a passion for programming.
          My primary languages are Java and Python. I am a motivated and proactive learner, always seeking a challenge and new opportunities to grow!
        </p>
        <button className="resumebutton" onClick={onResumeClick} >
          Check out my resume!</button>
      </div>
    </div>
  )
}

export default AboutMe