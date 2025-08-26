import '../styles/Bottom.scoped.css';
import '../styles/Home.scoped.css';

export default function Home(){
    return (<div id={'hero'} className="container hero-space">
            <div className="hero-image">
                <img src={'/assets/img/hero-image.jpg'} alt="profile"/>
                </div>
                <div className="circular-image">
                    <img src={"/assets/img/hero-image.jpg"} alt="profile"/>
                </div>
                <div className="intro-text">
                    <div style={{fontWeight: "bolder", fontSize: "24px"}}>🧑🏾‍💻 Code. ☕️ Coffee. 🔁 Repeat.</div>
                    <div>I enjoy solving problems and building real-world apps</div>
                    <button className={'download-resume-btn'}>Get to Know Me</button>
                </div>
        </div>
    )

}

