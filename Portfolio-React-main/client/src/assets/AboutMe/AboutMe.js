import { useEffect } from "react"
import React from 'react'
import ScreenHeading from "../../utilities/SubHeading/ScreenHeading"
import ScrollService from "../../utilities/ScrollService"
import Animations from "../../utilities/Animations"
import { Button } from "@mui/material"
import "./AboutMe.css"
import Aos from 'aos'
import "aos/dist/aos.css"



const AboutMe = (props) => {

  useEffect(()=>{
Aos.init({ duration:2000});
  },[])

 let fadeInScreenHandler = (screen) =>{
   if(screen.fadeInScreen !==props.id)
   return
   Animations.animations.fadeInScreen(props.id)
 }
 
 const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
 
 const SCREEN_CONSTANTS ={
   description: "Front End Web and Android/IOS app developer with backround knowledge of HTML, CSS, JS, ReactJS and Flutter along with a knack of building applications with utmost effeciency and Perfection, A quick learner who's always eager to learn something new ",
   highlights:{
     bullets:["Front End Web developer/App developer",
    "Interactive Front End as per the design",
     "React and FLutter",
    "Building REST API",]
heading:"Here are a few highlights:"

   }
 }

 const renderHighlight =()=>{
   return(
     SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>(
       <div className="highlights" key={i}>
         <div className="highlight-blob"></div>
         <span>{value}</span>
       </div>
   ))
   )
 }

  return (
    <div className='about-me-container screen-container' id={props.id || ""}>
      <div data-aos="fade-left" className="about-me-parent">
          <ScreenHeading title={'About Me'} subHeading={"Why Choose Me"} />
          <div className="about-me-card">
            <div className="about-me-profile">
            </div>

              <div className="about-me-details">
                <span className="about-me-description">
                  {SCREEN_CONSTANTS.description}
                </span>
                <div className="about-me-highlights">
                  <div className="highlight-heading">
                    <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                  </div>
                  {renderHighlight()}
                </div>
                <div className="about-me-options">
                <Button variant="contained" className="about-me-btn hire-me"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>{""} Hire Me</Button>
      <a href='resume.txt' class="btn-flip" data-back="Back" data-front="Front" download='Resume resume.txt'>
       <Button variant="outlined" className='about-me-btn get-resume'></Button>
       </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutMe
