import React from 'react'
import CroppedProfile from '../CroppedProfile.png'
import Fade from 'react-reveal/Fade';

function AboutMe() {
     return (

          <div id="about" className="about-container">

          
               <div className="about-content">
                    <img src={CroppedProfile} />                    
               </div>
               
               
               <div className="about-container-content">
                    <Fade left>
                    <div className="about-content-container">
                         <h5 className="about-subtitle">Where I've been</h5>
                         <p><span className="about-accents">Everywhere I go, I try and surround myself in unfamiliar environments. </span>You get to meet some pretty cool people that way. Growing up, I spent 6 years studying Buddhism with monks, ran for office in high school, and joined two fraternities in college. I also volunteered as a paramedic at festivals, shadowed the leading pioneer of ketamine psychotherapy, and worked with the homeless population for a few years. <span className="about-accents">All of this has broadened my understanding of people and myself.</span> </p>
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className="about-content-container">
                         <h5 className="about-subtitle">What I'm doing</h5>
                         <p>After graduating from University of California, Santa Barbara with a <span className="about-accents">degree in Biology</span>, I threw in my scrubs to become a <span className="about-accents"> FullStack Web Developer</span>.</p> <p>If I’ve learned anything from coding thus far, it’s that <span className="about-italics">languages are always changing and evolving - and I plan on doing the same.</span></p>
                    </div>
                    </Fade>

                    <Fade right>
                    <div className="about-content-container">
                         <h5 className="about-subtitle">What I hope to do</h5>
                         <p>Being able to empathize in the perspective of the people has changed the way I’ve approached software development. I want to apply all the values and insights I’ve gained to <span className="about-accents">continue delivering work that is objectively structured, as well as subjectively meaningful to a wide spectrum of users.</span> Having the opportunity to do this for a small to mid-sized company would be an absolute dream. </p>
                    </div>
                    </Fade>
               </div>

           
          </div>
     )
}

export default AboutMe