import '../styles/Dashboard.scoped.css';
// import SomeImage from '../assets/bcrop.png';
import SomeImage from '../assets/test2.jpeg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedinIn, faStackOverflow, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {useEffect, useRef} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import NoPage from "./NoPage";
import Projects from "./Projects";


export default function Dashboard() {

    const resumeRef = useRef(null);
    const projectsRef = useRef(null);
    const homeRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.pathname === "/resume") {
            resumeRef.current.classList.add("active");
        } else if (window.location.pathname === "/projects") {
            projectsRef.current.classList.add("active");
        } else {
            homeRef.current.classList.add("active");
        }
    }, []);

    const setClassName = (e, name, className) => {
        e.preventDefault();
        if (name === "resume") {
            projectsRef.current.classList.remove("active");
            homeRef.current.classList.remove("active");
            resumeRef.current.classList.add(className);
            navigate("/resume");
        } else if (name === "projects") {
            resumeRef.current.classList.remove("active");
            homeRef.current.classList.remove("active");
            projectsRef.current.classList.add(className);
        } else if (name === "home") {
            resumeRef.current.classList.remove("active");
            projectsRef.current.classList.remove("active");
            homeRef.current.classList.add(className);
        }
    }

    return (
        <>
            <div className="navbar">
                <div className="nav-items">
                    <li ref={homeRef} className="active"
                        onClick={(e) => setClassName(e, "home", "active")}
                    ><a href="/">&lt;dev-shivpujan /&gt;</a></li>
                    <li ref={resumeRef}
                        onClick={(e) => setClassName(e, "resume", "active")}
                    ><a href="/">Resume</a></li>
                    <li ref={projectsRef}
                        onClick={(e) => setClassName(e, "projects", "active")}
                    ><a href="/">Projects</a></li>
                    {/*<li><a href="/about"></a></li>*/}
                </div>
            </div>
            <Home />

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