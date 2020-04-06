import React from 'react'
import Logo from '../Logo.png'
import KevinHome from '../KevinHome.png'
import Fade from 'react-reveal/Fade';

function LandingPage() {

     // const resumeButton = () => {
     //      alert('TBA - Sorry about that!')
     // }


     return (
          
          <div id="home">
               <div className="nav-bar">
                    <nav>
                         <a href="#home"><img className="logo-home" src={KevinHome} alt="Home logo" /></a>
                         <div className='nav-link-container'>
                              <a href="#about">About</a>
                              <a href="#projects">Projects</a>
                              <a href="#contact">Contact</a>
                              <a href="https://drive.google.com/file/d/1Xs0Qnxpy0NqeyFwhr2w53ZnCmfei_tQv/view" className="resume">Resume</a>
                         </div>
                    </nav>
               </div>
               <Fade top>
               <div className="logo-container">
                    <img src={Logo} alt="logo" className="logo" />
               </div>
             
               <div className="landing-page-button-container">
                    <a href="#about"><button className="landing-page-button">PROCEED</button></a>
               </div>
               </Fade>
          </div>
     )
}
export default LandingPage
