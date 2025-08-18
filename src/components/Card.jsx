import { Fav } from "./Fav"
import { useNavigate } from "react-router-dom";




export const Card = ({id,  name, title, img, type }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/single/${type}/${id}`);
    };

    return (
    <div className="card py- col-4 bg-dark text-white card-custom border-white">
      {img && <img src={img} alt={title} className="card-img-top w-100" />}
      <div className="card-body">
            <h5 className="card-title">{title}{name} </h5>
            <div className="d-flex flex-column gap-1 justify-center">
           
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <button onClick={handleClick} className="btn btn-light">Learn More</button>
            <Fav name={name} type={"character"} />
            </div>
        </div>

    </div>

    );

}


