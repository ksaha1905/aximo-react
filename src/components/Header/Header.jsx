import headerCSS from './../Header/Header.module.css'
import star from './../../assets/star.png'
import user1 from './../../assets/user1.png'
import user2 from './../../assets/user2.png'
import user3 from './../../assets/user3.png'
import headerImg from './../../assets/header-img.jpg'
import arrow from './../../assets/arrow.png'

const Header = () => {
  return (
    <div className={`${headerCSS.headerWrapper} section`}>
        <div className={headerCSS.content}>
            <h1>A Creative 
                <img src={star} alt="" /><br /><br />
                Digital Studio
            </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut maxime eum odit repudiandae tempora, ipsum, quas quam excepturi, consequuntur quaerat vel possimus? Dolores, est ducimus!</p>
            <div className={headerCSS.profiles}>
                <div className={headerCSS.img}>
                    <img src={user1} alt="" />
                    <img src={user2} alt="" />
                    <img src={user3} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button>Book a Free Consultation</button>
            <img src={arrow} alt="" id={headerCSS.arrow}/>
        </div>
        <div className={headerCSS.headerImg}>
            <img src={headerImg} alt="" />
        </div>
    </div>
  )
}

export default Header