import SomeImage from "../assets/test2.jpeg";
import '../styles/Dashboard.scoped.css';
export default function Home(){
    return (
        <div className="container">
            {/*<div className="blob-1">*/}
            {/*    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">*/}
            {/*        <path fill="#FF0066" d="M38.1,-28.1C50.6,-14.8,62.5,1.1,57.6,9.2C52.6,17.3,30.6,17.6,11.7,28.2C-7.2,38.8,-23,59.7,-32.5,58.6C-41.9,57.4,-44.9,34.2,-48.2,13C-51.4,-8.3,-55,-27.5,-47,-39.7C-39,-52,-19.5,-57.3,-3.3,-54.6C12.9,-51.9,25.7,-41.3,38.1,-28.1Z" transform="translate(100 100)" />*/}
            {/*    </svg>*/}
            {/*</div>*/}
            {/*<div className="blob-2">*/}
            {/*    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">*/}
            {/*        <path fill="#0F62FE" d="M52.3,-35.1C68.5,-21.4,82.9,0.4,80.8,22.1C78.8,43.8,60.4,65.5,41.4,67.6C22.4,69.7,2.8,52.2,-12.3,39.5C-27.5,26.9,-38.2,19,-44.6,5.9C-51,-7.2,-53,-25.5,-44.9,-37.3C-36.7,-49.1,-18.3,-54.4,-0.1,-54.3C18.1,-54.2,36.1,-48.7,52.3,-35.1Z" transform="translate(100 100)" />*/}
            {/*    </svg>*/}
            {/*</div>*/}
            <div className="intro-text">
                <li>hi!, I'm</li>
                <li>Shivpujan yadav</li>
                <li>a Software Developer</li>
            </div>
            <div className="fade-img">
                <img src={SomeImage} alt="profile"/>
            </div>
        </div>
    )
}