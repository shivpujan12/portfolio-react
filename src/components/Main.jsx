import "../styles/Main.scoped.css"
import "../styles/Timeline.scoped.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCircleInfo, faFolderOpen,
    faLaptopCode,
    faNetworkWired,
    faPersonWalking,
    faProjectDiagram
} from '@fortawesome/free-solid-svg-icons';
import {journeySofar, tabTypes} from "../data";
import {useState} from "react";

export default function Main() {
    const [activeTab, setActiveTab] = useState(tabTypes[0]);
    return (
        <div className={'Main'}>
            <div className={'container internal-section-space'}>
                <div className={'tab-container'}>
                    {
                        tabTypes.map((tab,index) => {
                            const isActive = activeTab.id === tab.id;
                            return (
                                <h1 className={`${isActive ? 'glass tab-active ' : ''}`}>
                                    <span className={'tab-icon'} onClick={() => setActiveTab(tab)}>
                                        <FontAwesomeIcon icon={tab.icon}/>
                                    </span>
                                    <span className={`${activeTab.id===tab.id ? 'active' : ""} tab-name`}>
                                        {tab.title}
                                    </span>
                                </h1>
                            )
                        })
                    }
                </div>
                <TimeLine />
                <MobileTimeLineView/>
            </div>
        </div>
    )
}

const TimeLine = () => {

    return (
        <div className={'timeline mobile-display-none'}>
            {
                journeySofar.map(journey => {
                    return (
                        <div className={'timeline-item'}>
                            <div className={'timeline-title'}>
                                {journey.timeline_title}
                            </div>
                            <div className={'right-container'}>
                                <div className={'timeline-content-container'}>
                                    {journey.content.map(content => {
                                        return (<JourneyCard content={content}/>)
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

const MobileTimeLineView = () => {
    return (
        <div className={'mobile-timeline not-mobile-display-none'}>
            {
                journeySofar.map(journey => {
                    return (
                        <div className={'mobile-timeline-item'}>
                            <div className={'timeline-title'}>{
                                journey.timeline_title
                            }
                                <div className={'extra-content-icon'}
                                     onClick={() => {
                                     }}
                                >
                                    <FontAwesomeIcon icon={faCircleInfo}/>
                                </div>
                            </div>
                            <div className={'timeline-content-container'}>
                                {
                                    journey.content.map(content => {
                                        return (<JourneyCard content={content}/> )
                                    })
                                }
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

const JourneyCard = ({content}) => {
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