import "../styles/WorkEx.scoped.css"
import "../styles/Timeline.scoped.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPersonWalking} from '@fortawesome/free-solid-svg-icons';
import {journeySoFar} from "../data";

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
            {
                journeySoFar.map(journey => {
                    return (
                        <div className={'timeline-item'}>
                            <div className={'timeline-title'}>
                                {journey.timeline_title}
                            </div>
                            <div className={'right-container'}>
                                <div className={'timeline-content-container'}>
                                    {journey.content.map(content => {
                                        return (<WorkExCard content={content}/>)
                                    })}
                                </div>
                                {<div className={'extra-content'}>
                                    {journey.extra && <div className={'skills'}>
                                        Skills Unlocked: <br/>
                                        {journey.extra.skills}
                                    </div>}
                                    <div className={"achievements"}>
                                        {journey.extra.achievements && <>Achievements: <br/></>}
                                    {
                                        journey.extra &&
                                        journey.extra.achievements &&
                                        journey.extra.achievements.map(achievement => {
                                            return (<li className={'achievement'}>{achievement}</li>)
                                        })
                                    }
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>)
}

const WorkExCard = ({content}) => {
    return (<div className={'timeline-content'}>
        <div className={'brand-logo'}>
            <img src={content.brand_logo} alt={content.role_title} />
        </div>
        <div className={'role-description'}>
            {content.role_title && <div className={'role-title'}>{content.role_title}</div>}
            {content.role_company && <div className={'role-company'}>{content.role_company}</div>}
            {content.role_duration && <div className={'role-duration'}>{content.role_duration}</div>}
            {content.role_location && <div className={'role-location'}>{content.role_location}</div>}
        </div>
    </div>)
}