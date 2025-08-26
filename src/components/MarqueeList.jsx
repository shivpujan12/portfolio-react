import '../styles/Marquee.scoped.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function MarqueeList({items}) {
    // items = items.concat(skillSet);
    return (
        <div className="marquee-container">
            <div className="marquee-overlay left"/>
            <div className="marquee">
                <div className="marquee-content">
                    {items.concat(items).map((item, index) => (
                        <div key={index} className="marquee-item">
                            <FontAwesomeIcon icon={item.icon} title={item.title} style={{ fontSize: '28px', marginRight: '8px' }} />
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marquee-overlay right"/>
        </div>
    );
}

export default MarqueeList;
