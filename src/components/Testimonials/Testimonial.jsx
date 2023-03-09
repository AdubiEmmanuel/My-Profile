import React from 'react';
import './Testimonial.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import {Pagination} from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonial =() =>{
  const clients = [
      {
          img:profilePic1,
          review:`this is the best programmer
          i have ever met in the inustry. 
          he is calm, cool-headed and pays great 
          attensions to details at all times...`
      },
      {
          img:profilePic2,
          review:`this is the best programmer
          i have ever met in the inustry. 
          he is calm, cool-headed and pays great 
          attensions to details at all times...`
      },
      {
          img:profilePic3,
          review:`this is the best programmer
          i have ever met in the inustry. 
          he is calm, cool-headed and pays great 
          attensions to details at all times...`
      },
      {
          img:profilePic4,
          review:`this is the best programmer
          i have ever met in the inustry. 
          he is calm, cool-headed and pays great 
          attensions to details at all times...`
      },


    ]
  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Clients alway get</span>
            <span>Exceptional Work</span>
            <span>from me..</span>
            <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background:'skyblue'}}></div>
        </div>
        {/* slider */}
         <Swiper
         
         modules={[Pagination]}
         slidesPerView={1}
         pagination={{ clickable:true }}
         >
             {clients.map((client,index)=>{
                 return(
                     <SwiperSlide key={index}>
                         <div className='testimonial'>
                             <img src={client.img} alt="" />
                            <span>{client.review}</span>
                         </div>    
                     </SwiperSlide>
                 );
             })}
         </Swiper>
    </div>
  );
}

export default Testimonial