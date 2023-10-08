import codeArenaImage from "../assets/code-arena.png";
import mindMattersImage from "../assets/mind-matters-shot2.png";
import ducsAlumniImage from "../assets/ducs-alumni.png";
import dpsImage from "../assets/dps-image.png";
import "../styles/Projects.scoped.css"

export default function UpcomingProjects() {
    return (
        <div>
            <div className="project">
                <div className="project-img">
                    <img src={codeArenaImage}/>
                </div>
                <div className="project-info">
                    <h3>Code Arena</h3>
                </div>
            </div>
            <div className="project">
                <div className="project-img">
                    <img src={mindMattersImage}/>
                </div>
                <div className="project-info">
                    <h3>Code Arena</h3>
                </div>
            </div>
            <div className="project">
                <div className="project-img">
                    <img src={ducsAlumniImage}/>
                </div>
                <div className="project-info">
                    <h3>Code Arena</h3>
                </div>
            </div>
            <div className="project">
                <div className="project-img">
                    <img src={dpsImage}/>
                </div>
                <div className="project-info">
                    <h3>Code Arena</h3>
                </div>
            </div>
        </div>
    )
}