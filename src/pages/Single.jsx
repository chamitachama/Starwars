import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect } from "react";
import { fetchDetails } from "../actions/peopleActions";

export const Single = () => {
  const { store, dispatch } = useGlobalReducer()
  const { type, id } = useParams()

  useEffect(() => {
    fetchDetails(dispatch, type, id);
  }, [dispatch, type, id]);


  const item = store.single;


  if (!item) return <p className="text-white">Loading...</p>;


  return (
    <div className="container text-center py-4">
      <h1 className="display-4 text-warning">{item.name}</h1>
      <hr className="my-4" />

      {type === "people" && (
        <div className="text-white">
          <p >Gender: {item.gender}</p>
          <p>Hair Color: {item.hair_color}</p>
          <p>Skin Color: {item.skin_color}</p>
          <p>Eye Color: {item.eye_color}</p>
        </div>
      )}

      {type === "planets" && (
        <div className="text-white">
          <p>Climate: {item.climate}</p>
          <p>Terrain: {item.terrain}</p>
          <p>Population: {item.population}</p>
        </div>
      )}

      <Link to="/">
        <span className="btn btn-dark border-white btn-lg mt-3">Back home</span>
      </Link>
    </div>
);
};


