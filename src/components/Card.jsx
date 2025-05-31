import { Star } from "./Star"

export const Card = ({name, gender, hairColor}) => (
    <div className="card">
        <img src="" alt="" className="card-img.top" />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Gender: {gender}</p>
            <p className="card-text">Hair Color: {hairColor}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary">Learn More</button>
            <Star name={name} type={"character"} />
        </div>
    </div>
)
