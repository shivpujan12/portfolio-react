import "../styles/Projects.scoped.css";
import {useRef, useState} from "react";
import Project from "./Project";

export default function WebProject() {

    const containerRef = useRef(null);
    const [projects, setProjects] = useState([
        {
            name: "Code Arena",
            image: "/assets/img/code-arena.png",
            link: "https://arena-ducs.web.app/",
            description: "Code Arena is a web application that allows users to create and participate in coding contests. It is a full stack application built using React, Node.js, Firebase."
        },
        {
            name: "Mind Matters",
            image: "/assets/img/mind-matters-shot2.png",
            link: "https://github.com/shivpujan12/mind_matters",
            description: "Mind Matters is a platform that was built to facilitate competition for Mind Matters event. It is a full stack application built using Electron., 50+ student used it in competition."
        },
        {
            name: "DUCS Alumni",
            image: "/assets/img/ducs-alumni.png",
            link: "http://alumni.cs.du.ac.in/",
            description: "DUCS Alumni is a platform that was built to facilitate communication between DUCS Alumni and DUCS. It is a full stack application built using HTML,CSS and JavaScript"
        },
        {
            name: "DPS",
            image: "/assets/img/dps-image.png",
            link: "https://akmdpsparsabad.in/",
            description: "DPS is a Website for AKM DPS parsabad School. It is a full stack application built using HTML,CSS and JavaScript"
        }
    ]);

    return (
        <div ref={containerRef} className="container">
            {
                Object.keys(projects).map((i) => {
                    return(

                        <Project key={i} data ={projects[i]}/>


                    )
                })
            }
        </div>
    )
}