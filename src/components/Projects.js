import {useEffect, useRef} from "react";
import "../styles/Projects.scoped.css";
import codeArenaImage from "../assets/code-arena.png";
// import mindMattersImage from "../assets/mind-matters.png";
import mindMattersImage from "../assets/mind-matters-shot2.png";
import ducsAlumniImage from "../assets/ducs-alumni.png";
import dpsImage from "../assets/dps-image.png"
import {Link, Outlet, Route, Routes, useNavigate} from "react-router-dom";
import WebProject from "./WebProject";
import AndroidProject from "./AndroidProject";
import WorkEx from "./WorkEx";


export default function Projects(){

    const webRef = useRef(null);
    const androidRef = useRef(null);
    const workEx = useRef(null);
    const navbarRef = useRef(null);
    const navigate = useNavigate();

    const handleScroll = () => {
        const sticky = navbarRef.current.offsetTop;
        if (window.pageYOffset >= sticky) {
            navbarRef.current.classList.add("sticky")
        } else {
            navbarRef.current.classList.remove("sticky");
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const setClassName = (e, name) => {
        e.preventDefault();
        if (name === "web") {
            androidRef.current.classList.remove("active");
            workEx.current.classList.remove("active");
            webRef.current.classList.add("active");
            // navigate("/projects/web");
        } else if (name === "android") {
            webRef.current.classList.remove("active");
            workEx.current.classList.remove("active");
            androidRef.current.classList.add("active");
            // navigate("/projects/android");
        } else if (name === "workEx") {
            webRef.current.classList.remove("active");
            androidRef.current.classList.remove("active");
            workEx.current.classList.add("active");
            // navigate("/projects/upcoming");
        }
    }


    return (
        <div className="container" onScroll={handleScroll}>
            <div className="navbar" ref={navbarRef}>
                <div className="nav-items">
                    <li ref={webRef} className="active"
                        onClick={(e) => setClassName(e, "web")}><Link to="/projects/web">Web</Link></li>
                    <li ref={androidRef}
                        onClick={(e) => setClassName(e, "android")}><Link to="/projects/android">Android</Link></li>
                    <li ref={workEx}
                        onClick={(e) => setClassName(e, "workEx")}><Link to="/projects/upcoming">WorkEx</Link></li>
                </div>
            </div>
            <Outlet className="project-content"/>
        </div>
    )
}