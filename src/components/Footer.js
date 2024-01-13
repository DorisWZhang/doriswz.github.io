import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <a onClick={() => window.open('https://www.linkedin.com/in/doris-zhang-b3837a288/')}>
                <LinkedInIcon/></a>
              <a onClick={() => window.open('https://github.com/DorisWZhang')}>
                <GitHubIcon/></a>
              <a onClick={() => window.open('mailto:doriszhang912@gmail.com')}><EmailIcon/></a>
        
             </div>
    </div>
  );
}

export default Footer