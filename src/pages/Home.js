import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../assets/My_Resume.pdf";

//function for resume button
function onResumeClick() {
  window.open(Resume);
}


function Home() {
  
  return (
    

    <div className="home">
        <div className= "about">
            <p className="intro">Hi! My Name is </p>
            <p className="name"><b>Doris Zhang</b></p>
            <div className="prompt"> 
                <p>   
                    <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                    .changeDelay(100)
                    .typeString("I am a ")
                    .typeString("Science Student".italics())
                    .pauseFor(1500)
                    .deleteChars(15)
                    .typeString("Creator".italics())
                    .pauseFor(1500)
                    .start();
                    
                   
                }}
                options={{
                  loop:true
                }}
            />
                  
                </p>
                
            </div>

            <div className="social-media">
              <a onClick={() => window.open('https://www.linkedin.com/in/doris-zhang-b3837a288/')}>
                <LinkedInIcon/></a>
              <a onClick={() => window.open('https://github.com/DorisWZhang')}>
                <GitHubIcon/></a>
              <a onClick={() => window.open('mailto:doriszhang912@gmail.com')}><EmailIcon/></a>
             </div>
             <a className="resume">
                <button onClick={onResumeClick}><span>Resume</span></button>
            </a>
        </div>
       
    </div>
  )
}

export default Home