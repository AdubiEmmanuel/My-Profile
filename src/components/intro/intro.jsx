import React from 'react';
import './intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion'

 
const intro= () =>{
  const transition = {duration: 2, type: 'spring' }

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi I Am</span>
                <span>Emmanuel Adubi</span>
                <span>Frontend Developer with highlight
                    high level of experience in web designing and 
                    development, producing the Quality work
                </span>
            </div>

            <button className="button i-button">Hire me</button>
            <div className="i-icons">
              <a href="">
              <img src={Github} alt="" />
              </a>
              
              <img src={LinkedIn} alt="" />
              <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
          <motion.img
          initial={{left: '-36%'}}
          whileInView={{left:'-24%'}}
          transition={transition}
          className='.floating-div'

          src={glassesimoji} alt="" />
          <motion.div 
           initial={{top: '-4%', left:'74%'}}
           whileInView={{left:'68%'}}
           transition={transition}

          style={{top: '-2%', left:'53%'}}
          className='.floating-div'
          >
              <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
          </motion.div>
          <motion.div 
           initial={{left: '9rem', top:'18rem'}}
           whileInView={{left:'0rem'}}
           transition={transition}
           className='.floating-div'

          
          style={{top:'20rem', left:'2rem'}}>
            <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
          </motion.div>
          {/* blur divs */}
          <div className="blur" style={{background: 'rgb(238 210 255'}}>
          </div>
          <div className="blur" style={{background:'#C1F5FF',
                                        top:'17rem', 
                                        width:'21rem', 
                                        height:'11rem', 
                                        left:'-9rem'}}>

          </div>
        </div>
    </div>
  )
}

export default intro