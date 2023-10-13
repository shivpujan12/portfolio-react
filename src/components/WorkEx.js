import internCert from "../assets/internCert.png";
import internCert2 from "../assets/internCert2.png";
import cheggCert from "../assets/cheggCert.png";
import srijanHeader from "../assets/srijanHeader.png";
import {useRef, useState} from "react";
import "../styles/WorkEx.scoped.css"

export default function WorkEx() {
    const containerRef = useRef(null);
    const [projects, setProjects] = useState([
        {name: "Android Dev Intern",
            image: internCert,
            desc: "Worked on the Android app of the company. Implemented a new feature to the app and fixed bugs in the existing codebase. Also worked on the backend of the app using Firebase."
        },
        {name: "Android Dev Intern", image: internCert2,
        desc: "Hired as an Android developer intern. Worked on the Android app of the company."},
        {name: "Chegg Expert", image: cheggCert,
        desc: "Worked as a Chegg Expert. Helped students with their doubts in Computer Science and Programming."},
        {name: "Lead Editor", image: srijanHeader,
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