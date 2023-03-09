import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import {themeContext} from '../../Context';
import {useContext} from 'react';
import {motion} from 'framer-motion'






const Works = () =>{
    const transition = {duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="works">
        {/* left side */}
     <div className="awesome" style={{width:'50%'}}>
       <span>Work for All these!</span>
       <span>Brands & Clients</span>
       <span>I design using mobile first approach and I have 5 years working experience as a front-end engineer. I deliver to you quality, mordern day design that will blow your mind
       <br />
       My designs are indeed awesome, this is something you really want to take a good look at..
       <br />
       More cool stuffs in the future abeg...
       More cool stuffs in the future abeg...
       <br />

       </span>
       
       <button className="button s-button">Hire me</button>
       <button className="blur s-blur1" style={{background:'#ABF1FF94'}}>Download CV</button>
       
     </div>

     {/* Right side */}

       <div className="w-right" >
       
       
       
           <motion.div 
           initial={{rotate: 45}}
           whileInView={{rotate:0}}
           viewport={{margin:'-40px'}}
           transition={{duration: 3.5, type: 'spring'}}         
           className="w-mainCircle">

               <div className="w-secCircle">
                   <img src={Upwork} alt="" />
               </div>
               <div className="w-secCircle">
                   <img src={Fiverr} alt="" />
               </div>
               <div className="w-secCircle">
                   <img src={Amazon} alt="" />
               </div>
               <div className="w-secCircle">
                   <img src={Shopify} alt="" />
               </div>
               <div className="w-secCircle">
                   <img src={Facebook} alt="" />
               </div>
               {/* background Circle  */}
               <div className="w-backCircle blueCircle"></div>
               <div className="w-backCircle yellowCircle"></div>
           </motion.div>

       </div>
       
    </div>
  )
}

export default Works