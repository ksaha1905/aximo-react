import React from 'react'
import serviceCSS from './../Service/Service.module.css'
import star from './../../assets/star.png'
import imgArrow from './../../assets/arrow-right.svg'
import serviceBg from './../../assets/Service-bg.jpg'

const Service = () => {
  return (
    <div className={`${serviceCSS.serviceWrapper} section`} id='service'>
        <h1 className='section_title'>We Provide Effective <br /> Design Solutions
        <img src={star} alt="" />
        </h1>
        <div className={serviceCSS.serviceCards}>
            <div className={serviceCSS.serviceCard}>
                <i className='ri-shape-line'></i>
                <h2>Graphic Design</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, quis.</p>
                <img src={imgArrow} alt="" />
            </div>
            <div className={serviceCSS.serviceCard}>
                <i className='ri-exchange-2-line'></i>
                <h2>UI/UX Design</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, quis.</p>
                <img src={imgArrow} alt="" />
            </div>
            <div className={serviceCSS.serviceCard}>
                <i className='ri-terminal-box-line'></i>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, quis.</p>
                <img src={imgArrow} alt="" />
            </div>
            <div className={serviceCSS.serviceCard}>
                <i className='ri-meteor-line'></i>
                <h2>Motion Graphics</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, quis.</p>
                <img src={imgArrow} alt="" />
            </div>

        </div>
       
       <div className={serviceCSS.Title}>
        <h3>We Make Your <img src={star} alt="" /><br />Business Stand Out</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut id excepturi illo mollitia deleniti!</p>
       </div>
       <div className={serviceCSS.service_bottom_container}>
            <div className={serviceCSS.serviceImg}>
                <img src={serviceBg} alt="" />
            </div>
            <div className={serviceCSS.service_contentWrapper}>
                <div className={serviceCSS.content}>
                <h2>15+</h2>
                <p>Years of Experience</p>
                </div>
                <div className={serviceCSS.content}>
                <h2>120+</h2>
                <p>Successful Projects</p>
                </div>
                <div className={serviceCSS.content}>
                <h2>100%</h2>
                <p>Client Satisfaction</p>
                </div>
                
            </div>
       </div>
    </div>
  )
}

export default Service