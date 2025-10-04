import '../styles/Bottom.scoped.css';
import '../styles/Home.scoped.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faToolbox} from "@fortawesome/free-solid-svg-icons";

export default function Home(){
    return (
        <div id={'hero'} className="container hero-space">
            <div className="hero-image">
                <img src={'/assets/img/shivpujan.png'} alt="profile"/>
                {/*<img src={'/assets/img/profile-2.png'} alt="profile"/>*/}
            </div>
            <div className="intro-text">
                <div className={'intro-text-subtext'}>🧑🏾‍💻 Code. ☕️ Coffee. 🔁 Repeat.</div>
                <div>I enjoy solving problems and building real-world apps</div>
                <button className={'download-resume-btn'}>Get to Know Me</button>
            </div>
            <InfoBar />
        </div>
    )

}

const InfoBar = () => {
    return (
        <div className="info-bar mobile-display-none">
            <span> Skill Inventory  <FontAwesomeIcon icon={faToolbox}/></span>
        </div>
    )
}

