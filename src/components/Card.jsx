import { Fav } from "./Fav"
import { Link } from "react-router-dom";




export const Card = ({ type, data }) => {


   

    return (
    <div className="card py- col-4 bg-dark text-white card-custom border-white">
      {data.img && <img src={data.img} alt={data.title} className="card-img-top w-100" />}
      <div className="card-body">
            <h5 className="card-title">{data.title}{data.name} </h5>
            <div className="d-flex flex-column gap-1 justify-center">
           
            </div>
            <div className="d-flex justify-content-between align-items-center">

            <Link to={`/single/${type}/${data.id}`} className="btn btn-dark  border-warning mt-2">Learn more</Link>

            <Fav name={data.name} type={`${type}`} />
            </div>
        </div>

    </div>

    );

}


