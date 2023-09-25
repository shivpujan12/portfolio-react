import '../styles/Dashboard.scoped.css';
// import SomeImage from '../assets/bcrop.png';
import SomeImage from '../assets/test2.jpeg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedinIn, faStackOverflow, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {useRef} from "react";


export default function Dashboard() {

    const resumeRef = useRef(null);
    const projectsRef = useRef(null);
    const homeRef = useRef(null);
    const handleNavClicks = (e) => {
        e.preventDefault();
        resumeRef.current.classList.remove('active');
        projectsRef.current.classList.remove('active');
        homeRef.current.classList.remove('active');
        e.target.classList.add('active');
    }

    return (
        <>
            <div className="navbar">
                <div className="nav-items">
                    <li ref={homeRef} className="active"><a href="/">&lt;dev-shivpujan /&gt;</a></li>
                    <li ref={resumeRef} onClick={(e)=>handleNavClicks(e)}><a href="/">Resume</a></li>
                    <li ref={projectsRef}><a href="/">Projects</a></li>
                    {/*<li><a href="/about"></a></li>*/}
                </div>
            </div>
            <div className="container">
                <div className="intro-text">
                    <li>hi!, I'm</li>
                    <li>Shivpujan yadav</li>
                    <li>a Software Developer</li>
                </div>
                <div className="fade-img">
                    <img src={SomeImage} alt="profile"/>
                </div>
            </div>
            <div className="bottom">

                <a href="https://www.linkedin.com/in/shivpujan-yadav-b98485142/"
                   className="linkedIn social">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
                </a>
                <a href="https://stackoverflow.com/users/8528579/shivpujan"
                   className="stack-of social">
                    <FontAwesomeIcon icon={faStackOverflow} size="2x"/>
                </a>
                <a href="https://twitter.com/_shivpujan" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x"/>
                </a>
                <a href="https://www.instagram.com/shivpujan_yadav/"
                   className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                </a>
                <a href="https://github.com/shivpujan12"
                   className="github social">
                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>

            </div>
        </>
    );
}