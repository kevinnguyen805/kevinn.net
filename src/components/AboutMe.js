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
                              <p>Everywhere I go, I try and surround myself in unfamiliar environments. You get to meet some pretty cool people that way. I spent 6 years studying Buddhism with monks, worked with the pioneer of ketamine psychotherapy, and delivered street medicine to the homeless. All of this has <span className="about-accents">broadened my understanding of people and myself</span>.</p>
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className="about-content-container">
                         <h5 className="about-subtitle">What I'm doing</h5>
                              <p>Upon graduating from University of California, Santa Barbara in biology, I threw in my scrubs to become a <span className="about-accents">developer</span>. In my free time, I enjoy studying <span className="about-accents">user-driven design</span> and reading about <span className="about-accents">product strategies</span>.</p> <p>If I’ve learned anything thus far, it’s that tech is always evolving - and I plan on doing the same.</p>
                    </div>
                    </Fade>

                    <Fade right>
                    <div className="about-content-container">
                         <h5 className="about-subtitle">What I hope to do</h5>
                              <p>There’s something about building a product from the ground up that moves me like no other. A big part comes from the buildup. Moments where adrenaline is what kicks a team into hyper focus - those are when I feel most alive. When I’m <span className="about-accents">framing</span>, <span className="about-accents">prototyping</span>, or <span className="about-accents">building</span> a project, it feels like this all the time.</p>
                    </div>
                    </Fade>
               </div>

           
          </div>
     )
}

export default AboutMe