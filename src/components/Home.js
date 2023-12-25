import SomeImage from "../assets/test2.jpeg";
import '../styles/Bottom.scoped.css';
import '../styles/Home.scoped.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedinIn, faStackOverflow, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Typewriter from 'typewriter-effect';

export default function Home(){
    return (
        <>
            <div className="container">
                <div className="fade-img">
                    <img src={SomeImage} alt="profile"/>
                </div>
                <div className="circular-image">
                    <img src={SomeImage} alt="profile"/>
                </div>
                <div className="intro-text">
                    <li>hi!, I'm</li>
                    <li>Shivpujan yadav</li>
                    {/*<li>a Software Developer</li>*/}
                    <Typewriter
                        options={{
                            strings: ['a Software Dev.', 'an Android Dev.', 'a Web Dev.'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
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
    )
}