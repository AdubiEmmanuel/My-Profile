import React from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import Slidebar from '../../img/sidebar.png'
import 'swiper/css'

function Portfolio() {
  return (
    <div className="portfolio" id='Portfolio'>

        {/* heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}

        <Swiper
        spaceBetween={20}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slidebar} alt="" />
            </SwiperSlide>
           

        </Swiper>
    </div>
  )
}

export default Portfolio