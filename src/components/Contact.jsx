import '../styles/Contact.Scoped.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faMailchimp} from "@fortawesome/free-brands-svg-icons";
import {faContactCard, faEnvelope, faGlobe, faMessage, faSitemap} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div className={'contact inter-bold'}>
            <div className={'contact-title'}> Open to Work ! Available for Collaboration ! Excited to Join a Great Team
                ! Exploring New Opportunities ! Ready for the Next Chapter!
            </div>
            <div className={'contact-container'}>
                <div className={'background-illustration'}>
                    <img src={'/assets/img/innovation.png'} alt={'innovation'}/>
                </div>

                <BusinessCard />

            </div>
            <div className={'footer'}>Made with lots of love, feel free to reach out for feedback or collaborations at shivpujan.work@gmail.com </div>
        </div>
    )
}

export default Contact;


  function BusinessCard() {
    return (
        <section className="business-card" aria-label="Professional business card">
            <header className="bc-header">
                <h1 className="bc-name">Shivpujan Yadav</h1>
                <p className="bc-role">Frontend Engineer | React + JavaScript</p>
                <p className="bc-location">Bengaluru, India | Open to Remote/On-site</p>
            </header>

            <p className="bc-pitch">
                I bring over 2 years of experience building modern, user-focused applications with React, JavaScript, and related tools.
                I thrive in collaborative environments, adapt quickly to challenges, and deliver clean, performant interfaces.
            </p>

            <ul className="bc-highlights" aria-label="Key strengths">
                <li>Shipped responsive, accessible UIs used by 50k+ users</li>
                <li>Strong with React 18, hooks, routing, state management</li>
                <li>Quality-focused: testing, performance focused code</li>
            </ul>

            <div className="bc-contact" aria-label="Contact and links">

                <a href="mailto:shivpujan.work@gmail.com" className="bc-link" aria-label="Email"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="https://codebyshiv.com" target="_blank" rel="noreferrer" className="bc-link" aria-label="Website">
                    <FontAwesomeIcon icon={faGlobe} />
                </a>
                <a href="https://www.linkedin.com/in/shivpujan" target="_blank" rel="noreferrer" className="bc-link" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/shivpujan12" target="_blank" rel="noreferrer" className="bc-link" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </section>
    );
}