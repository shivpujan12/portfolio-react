import "../styles/Project.scoped.css"
export default function Project({data}){
    return (
        <div className="project">
            <div className="project-img">
                <img src={data.image}/>
            </div>
            <div className="project-info">
                <h3>{data.name}</h3>
                <p>{data.description}</p>
                <div className="button"><a href={data.link}>Link to Project</a></div>
            </div>
        </div>
    )
}