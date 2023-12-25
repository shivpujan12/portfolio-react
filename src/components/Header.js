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
            projectsRef.current.classList.remove("active");
            homeRef.current.classList.remove("active");
            resumeRef.current.classList.add("active");
            navigate("/resume");
        } else if (window.location.pathname === "/projects") {
            resumeRef.current.classList.remove("active");
            homeRef.current.classList.remove("active");
            projectsRef.current.classList.add("active");
            navigate("/projects")
        } else {
            resumeRef.current.classList.remove("active");
            projectsRef.current.classList.remove("active");
            homeRef.current.classList.add("active");
            navigate("/home")
        }
    }, []);

    const setClassName = (e, name) => {
        e.preventDefault();
        if (name === "resume") {
            projectsRef.current.classList.remove("active");
            homeRef.current.classList.remove("active");
            resumeRef.current.classList.add("active");
            navigate("/resume");
        } else if (name === "projects") {
            resumeRef.current.classList.remove("active");
            homeRef.current.classList.remove("active");
            projectsRef.current.classList.add("active");
            navigate("/projects")
        } else if (name === "home") {
            resumeRef.current.classList.remove("active");
            projectsRef.current.classList.remove("active");
            homeRef.current.classList.add("active");
            navigate("/home")
        }
    }

    return (
        <div className="navbar">
            <div className="nav-items">
                <li ref={homeRef} className="active"
                    onClick={(e) => setClassName(e, "home")}
                ><a href="/">&lt;dev-shivpujan /&gt;</a></li>
                <li ref={resumeRef}
                    onClick={(e) => setClassName(e, "resume")}
                ><a href="/">Resume</a></li>
                <li ref={projectsRef}
                    onClick={(e) => setClassName(e, "projects")}
                ><a href="/">Projects</a></li>
                {/*<li><a href="/about"></a></li>*/}
            </div>
            <div className="mobile-menu">
                <li ref={resumeRef}
                    onClick={(e) => setClassName(e, "resume")}
                ><a href="/">Resume</a></li>
                <li ref={homeRef} className="active"
                    onClick={(e) => setClassName(e, "home")}
                ><a href="/">&lt;dev-shivpujan /&gt;</a></li>
                <li ref={projectsRef}
                    onClick={(e) => setClassName(e, "projects")}
                ><a href="/">Projects</a></li>
            </div>
        </div>

    )
}