import {useRef, useState} from "react";
import "../styles/WorkEx.scoped.css"

export default function WorkEx() {
    const containerRef = useRef(null);
    const [projects, setProjects] = useState([
        {name: "Android Dev Intern",
            image: "/assets/img/internCert.png",
            desc: "Worked on the Android app of the company. Implemented a new feature to the app and fixed bugs in the existing codebase. Also worked on the backend of the app using Firebase."
        },
        {name: "Android Dev Intern", image: "/assets/img/internCert2.png",
        desc: "Hired as an Android developer intern. Worked on the Android app of the company."},
        {name: "Chegg Expert", image: "/assets/img/cheggCert.png",
        desc: "Worked as a Chegg Expert. Helped students with their doubts in Computer Science and Programming."},
        {name: "Lead Editor", image: "/assets/img/srijanHeader.png",
        desc: "Worked as a Lead Editor for the college magazine. Was responsible for the content of the magazine."}
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
                                <div className="project-desc">
                                    <p>{projects[i].desc}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}