import "../styles/AndroidProjects.scoped.css";
import {useRef, useState} from "react";

export default function AndroidProject() {
    const containerRef = useRef(null);
    const [projects, setProjects] = useState([{
        name: "Location Picker", image: "/assets/img/screen.gif",link:"https://github.com/shivpujan12/LocationPicker",
        description: "This is an Android Library,Which picks the location from the map and returns its address. It is built with Android,Java, Google Location API. It is published on Jitpack and can be used by anyone in their project. It has 60+ stars."
    },
        {
            name: "Multilingual Calculator", image: "/assets/img/multilingual.webp",link:"https://play.google.com/store/apps/details?id=com.shivtechs.multilingualcalculator",
            description: "This is an Android Calculator, which supports 5 languages. It is built with Android,Java,kotlin. It is published on google playstore. It has 100+ downloads."
        },
        {
            name: "Toroid", image: "/assets/img/android.png",link:"https://github.com/shivpujan12/toroid",
            description: "This application was built as a skeleton application for E-bike company toroid, which was later used by the company to build their application. It is built with Android,Java. The application was designed to monitor calories,and physical activity of user"
        },
        {
            name: "X and O", image: "/assets/img/xando.png",link:"https://play.google.com/store/apps/details?id=com.shivtechs.xando",
            description: "This is an Android Tic Tac Toe game, which supports 2 players. It is built with Android,Java. It is published on google playstore."
        },
        {
            name: "Fiestron 2k18", image: "/assets/img/fiestron.gif",link:"https://github.com/shivpujan12/fiestron",
            description: "This is an Android application, which was built for the annual fest of our college. It is built with Android,Java."
        },
        {
            name: "Music Player", image: "/assets/img/android.png", link: "https://github.com/shivpujan12/MediaPlayer",
            description: "This is an Android Library, which can be used to implement music player functionality in any application. It is built with Android,Java. It is published on Jitpack and can be used by anyone in their project."
        },
        {
            name: "Sankalan 2k23", image: "/assets/img/sankalan.gif",link:"https://github.com/shivpujan12/Sankalan",
            description: "This android application was built for the annual fest of our college. It is built with Android,Java. It is published on google playstore."
        },
        {
            name: "Thought board", image: "/assets/img/thought.png",link:"https://github.com/joshidipesh12/ThoughtBoard-DUCS",
            description: "The aim of the application was to enable a platform for students to share their thoughts. It is built with Android,Java. It was built as a part of GDSC Android Study Jam."
        },
        {
            name: "Shared Clipboard", image: "/assets/img/android.png", link:"https://github.com/shivpujan12/SharedClipboard",
            description: "This is a Hybird project with Android and Desktop Application, It is used to share the copied text across the devices seamlessly.It is built with Android,Java,Swings,Firebase."
        }
    ]);

    const desc = useRef(null);

    return (
        <div ref={containerRef} className="container">
            {
                Object.keys(projects).map((i) => {
                    return(
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={projects[i].image}/>
                                </div>
                                <div className="flip-card-back">
                                    <div>
                                        <h3>{projects[i].name}</h3>
                                        <p>{projects[i].description}</p>
                                        <div className="button"><a href={projects[i].link}>Link to Project</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}