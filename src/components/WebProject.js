import codeArenaImage from "../assets/code-arena.png";
import mindMattersImage from "../assets/mind-matters-shot2.png";
import ducsAlumniImage from "../assets/ducs-alumni.png";
import dpsImage from "../assets/dps-image.png";
import "../styles/Projects.scoped.css";
import {useRef, useState} from "react";

export default function WebProject() {

    const containerRef = useRef(null);
    const [projects, setProjects] = useState([
        {name: "Code Arena", image: codeArenaImage},
        {name: "Mind Matters", image: mindMattersImage},
        {name: "DUCS Alumni", image: ducsAlumniImage},
        {name: "DPS", image: dpsImage}
    ]);

    return (
        <div ref={containerRef} className="container">
            {
                Object.keys(projects).map((i) => {
                    return(

                        <div className="project" key={i}>
                            <div className="project-img">
                                <img src={projects[i].image}/>
                            </div>
                            <div className="project-info">
                                <h3>{projects[i].name}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}