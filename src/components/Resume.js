import "../styles/Resume.scoped.css";
export default function Resume(){
    const handleIframeOnLoad = () => {
        document.getElementById("loader").style.display = "none";
    }
    return (
        <div className="container">
            <div id="loader">
                Loading....
            </div>
            <div className="resume">
                <iframe loading="lazy"
                        onLoad={handleIframeOnLoad}
                        allowFullScreen
                        title="Resume"
                        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFl9kFdbLU&#x2F;view?embed">
                </iframe>
            </div>
            <div className="button" role="button">
                <a rel="noreferrer" href="https://drive.google.com/file/d/1PVCml12ruNpdQfxfyGhp6hN8-wpBl52q/view?usp=sharing" target="_blank">
                    <span>Download Rezume</span>
                </a>
            </div>
        </div>
    )
}