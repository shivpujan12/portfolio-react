import {useEffect, useRef} from "react";
import "../styles/Projects.scoped.css";
import {Link, Outlet} from "react-router-dom";

export default function Projects(){

    const webRef = useRef(null);
    const androidRef = useRef(null);
    const workEx = useRef(null);
    const navbarRef = useRef(null);

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