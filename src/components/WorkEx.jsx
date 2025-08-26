import "../styles/WorkEx.scoped.css"
import "../styles/Timeline.scoped.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPersonWalking} from '@fortawesome/free-solid-svg-icons';

export default function WorkEx() {
    return (
        <div className={'workEx'}>
            <div className={'container internal-section-space'}>
                <h1><FontAwesomeIcon icon={faPersonWalking}/> &nbsp;Journey So far</h1>
                <TimeLine/>
            </div>
        </div>
    )
}

const TimeLine = () => {
    return (
        <div className={'timeline'}>
            <div className={'timeline-item'}>
                <div className={'timeline-title'}>
                    August '24
                </div>
                <div className={'timeline-content-container'}>
                    <div className={'timeline-content'}>
                        <div className={'brand-logo'}>
                            <img src="/assets/img/userfacet-logo.jpeg" alt="userfacet-logo"/>
                        </div>
                        <div className={'role-description'}>
                            <div className={'role-title'}>Software Engineer</div>
                            <div className={'role-duration'}> 1 year 8 months</div>
                            <div className={'role-location'}> Bengaluru</div>
                        </div>
                    </div>
                    <div className={'timeline-content'}>
                        <div className={'brand-logo'}>
                            <img src="/assets/img/buildux-logo.jpeg" alt="buildux-logo"/>
                        </div>
                        <div className={'role-description'}>
                            <div className={'role-title'}>Software Engineer</div>
                            <div className={'role-duration'}> 1 year 8 months</div>
                            <div className={'role-location'}> Bengaluru</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'timeline-item'}>
                <div className={'timeline-title'}>
                    January '24
                </div>
                <div className={'timeline-content'}>
                    <div className={'brand-logo'}>
                        <img src="/assets/img/userfacet-logo.jpeg" alt="userfacet-logo"/>
                    </div>
                    <div className={'role-description'}>
                        <div className={'role-title'}>Software Engineer Intern</div>
                        <div className={'role-duration'}> 6 Months</div>
                        <div className={'role-location'}> Bengaluru</div>
                    </div>
                </div>
            </div>
        </div>)
}