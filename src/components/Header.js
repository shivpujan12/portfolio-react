import {useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import '../styles/Header.scoped.css';

export default function() {

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
            navigate("/projects")
        } else if (name === "home") {
            resumeRef.current.classList.remove("active");
            projectsRef.current.classList.remove("active");
            homeRef.current.classList.add(className);
            navigate("/home")
        }
    }
    return (
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
    )
}