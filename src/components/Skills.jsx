import {skillSet} from "../data";
import MarqueeList from "./MarqueeList";

function Skills() {
    return (
        <div className={'skills-container'}>
            <MarqueeList items={skillSet}/>
        </div>
    );
}

export default Skills;