import "../styles/AndroidProjects.scoped.css";
import {useEffect, useRef, useState} from "react";
import locationPicker from "../assets/screen.gif";
import sankalan from "../assets/sankalan.gif";
import fiestron from "../assets/fiestron.gif";
import multilingual from "../assets/multilingual.webp";
import android from "../assets/android.png";
import thaught from "../assets/thought.png";
import xando from "../assets/xando.png";

export default function AndroidProject() {
    const containerRef = useRef(null);
    const [projects, setProjects] = useState([{
        name: "Location Picker", image: locationPicker},
        {name: "Multilingual Calculator", image: multilingual},
        {name: "Toroid", image: android},
        {name: "X and O", image: xando},
        {name: "Fiestron 2k18", image: fiestron},
        {name: "Music Player", image: android},
        {name: "Sankalan 2k23", image: sankalan},
        {name: "Thought board", image: thaught},
        {name: "Shared Clipboard", image: android}
    ]);

    return (
        <div ref={containerRef} className="container">
            {
                Object.keys(projects).map((i) => {
                    return(
                    <div className="cards" key={i}>
                        <div className="card-image">
                            <img src={projects[i].image}/>
                        </div>
                        <div className="card-description">
                            {projects[i].name}
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}