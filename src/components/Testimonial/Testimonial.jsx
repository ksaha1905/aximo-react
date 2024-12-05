import testimonialCSS from './../Testimonial/Testimonial.module.css'
import star from './../../assets/star.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"

import user1 from './../../assets/user1.png'
import user2 from './../../assets/user2.png'
import user3 from './../../assets/user3.png'
import { Autoplay } from 'swiper/modules'

const Testimonial = () => {
  return (
    <div className={`${testimonialCSS.testimonialWrapper} section`} id='testimonial'>
         <h1 className='section_title'>Clients are Always Satisfied <br /> With Us
        <img src={star} alt="" />
        </h1>
        <Swiper 
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        breakpoints={
            {
                0:{
                    slidesPerView:1
                },
                900:{
                    slidesPerView:2
                }
            }
        }
        autoplay={
            {
                delay: 2500,
            }
            
        }
        modules={[Autoplay]}

        className={testimonialCSS.swiper}>
            <SwiperSlide>
                <div className={testimonialCSS.swiperCard}>
                    <div className={testimonialCSS.rating}>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illum ad similique harum minus ullam asperiores modi rerum molestiae perspiciatis!
                    </p>
                    <div className={testimonialCSS.profile}>
                        <img src={user1} alt="" />
                        <h3>Joesph Downing <span>SEO, XYZ</span></h3>
                    </div>
                 
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={testimonialCSS.swiperCard}>
                    <div className={testimonialCSS.rating}>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illum ad similique harum minus ullam asperiores modi rerum molestiae perspiciatis!
                    </p>
                    <div className={testimonialCSS.profile}>
                        <img src={user2} alt="" />
                        <h3>Joe Shields <span>HR, ABP Ltd</span></h3>
                    </div>
                 
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={testimonialCSS.swiperCard}>
                    <div className={testimonialCSS.rating}>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illum ad similique harum minus ullam asperiores modi rerum molestiae perspiciatis!
                    </p>
                    <div className={testimonialCSS.profile}>
                        <img src={user3} alt="" />
                        <h3>Peter Vars <span>Legal Dept, XYZ</span></h3>
                    </div>
                 
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonial