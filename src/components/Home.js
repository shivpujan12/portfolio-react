import '../styles/Bottom.scoped.css';
import '../styles/Home.scoped.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faToolbox} from "@fortawesome/free-solid-svg-icons";

export default function Home(){
    return (
        <div id={'hero'} className="container hero-space">
            <div className="hero-image">
                <img src={'/assets/img/hero-image.jpg'} alt="profile"/>
            </div>
            <div className="circular-image">
                <img src={"/assets/img/hero-image.jpg"} alt="profile"/>
            </div>
            <div className="intro-text">
                <div style={{fontWeight: "bolder", fontSize: "24px"}}>🧑🏾‍💻 Code. ☕️ Coffee. 🔁 Repeat.</div>
                <div>I enjoy solving problems and building real-world apps</div>
                <button className={'download-resume-btn'}>Get to Know Me</button>
            </div>
            <InfoBar />
        </div>
    )

}

const InfoBar = () => {
    return (
        <div className="info-bar">
            <span> Skill Inventory  <FontAwesomeIcon icon={faToolbox}/></span>
        </div>
    )
}

