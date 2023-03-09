import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from '../Services/Resume.pdf'
import {themeContext} from '../../Context';
import {useContext} from 'react'
import {motion} from 'framer-motion'


const Services =() => {
  const transition = {duration: 2, type: 'spring' }
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>
    {/* left side */}
     <div className="awesome" style={{width:'50%'}}>
       <span>My Awesome</span>
       <span>services</span>
       <span>I design using mobile first approach and I have 5 years working experience as a front-end engineer. I deliver to you quality, mordern day design that will blow your mind
       <br />
       My designs are indeed awesome, this is something you really want to take a good look at..
       </span>
       <a href={Resume } download>
       <button className="button s-button">Download CV</button>
       </a>
       <button className="blur s-blur1" style={{background:'#ABF1FF94'}}>Download CV</button>
       
     </div>
     {/* right side */}
     <div className="cards">
       <motion.div style={{left: '14rem'}}
       initial={{left: '25%'}}
       whileInView={{left:'25rem'}}
       transition={transition}
       
       
       >
         <Card 
         emoji = {HeartEmoji}
         heading = {'Design'}
         detail = {'Figma, Sketch, Photoshop, Adobe, Adobe xd '}
         
         />
       </motion.div>
       <div style={{top:'12rem', left:'-4rem'}} >
       <Card 
        emoji={Glasses}
        heading={"Developer"}
        detail={"Html, Css, Javascript, React"}
       />
       </div>
       <motion.div style={{top:'19rem', left:'12rem'}} 
       initial={{left: '25%'}}
       whileInView={{left:'25rem'}}
       transition={transition}
       
       
       >
       <Card 
        emoji={Humble}
        heading={"UI/UX"}
        detail={"I am a modern day UI-UX designer with 5 years of experience"}
       />
       </motion.div>
        <div className='blur s-blur2' style={{ background:'var(--purple)'}} > </div>
       </div>
   </div>
  )
}

export default Services