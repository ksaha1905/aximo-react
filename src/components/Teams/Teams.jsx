import teamCSS from './../Teams/Teams.module.css'
import star from './../../assets/star.png'
import Team1 from './../../assets/team1.png'
import Team2 from './../../assets/team2.png'
import Team3 from './../../assets/team3.png'
import Team4 from './../../assets/team4.png'

const Teams = () => {
  return (
    <div className={teamCSS.teamsWrapper} id='teams'>
        <div className={teamCSS.anim_text}>
            <div>
                <h3>Meet Our Team<img src={star} alt="" /></h3>
                <h3>Meet Our Team<img src={star} alt="" /></h3>
                <h3>Meet Our Team<img src={star} alt="" /></h3>
                <h3>Meet Our Team<img src={star} alt="" /></h3>
                <h3>Meet Our Team<img src={star} alt="" /></h3>
                <h3>Meet Our Team<img src={star} alt="" /></h3>
            </div>
            <div>
                <h3>Meet Our Team<img src={star} alt="" /></h3>
                <h3>Meet Our Team<img src={star} alt="" /></h3>
                <h3>Meet Our Team<img src={star} alt="" /></h3>
                <h3>Meet Our Team<img src={star} alt="" /></h3>
                <h3>Meet Our Team<img src={star} alt="" /></h3>
                <h3>Meet Our Team<img src={star} alt="" /></h3>
            </div>
        </div>

        <h1 className='section_title'>We have a Team of<br /> Creative People
        <img src={star} alt="" />
        </h1>
        <div className={teamCSS.teamCards}>
            <div className={teamCSS.card}>
                <img src={Team1} alt="" />
                <h3>John Doe</h3>
                <p>Creative Team</p>
            </div>
            <div className={teamCSS.card}>
                <img src={Team2} alt="" />
                <h3>Mark Taylor</h3>
                <p>Creative Team</p>
            </div>
            <div className={teamCSS.card}>
                <img src={Team3} alt="" />
                <h3>Jack Robins</h3>
                <p>Creative Team</p>
            </div>
        </div>
    </div>
  )
}

export default Teams