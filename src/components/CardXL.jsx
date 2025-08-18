import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Single = (type, id) => {
  const { store } = useGlobalReducer();
  const { type, id } = useParams(); // obtenemos los parámetros de la URL

  let singleItem;

  // Buscar en el store según el tipo
  if (type === "person") {
    singleItem = store.people.find(p => p.uid === parseInt(id));
  } else if (type === "planet") {
    singleItem = store.planets.find(p => p.uid === parseInt(id));
  }

  // Mostrar loading si aún no se encuentra el item
  if (!singleItem) return <p className="text-white">Loading...</p>;

  return (
    <div className="container text-center py-4">
      <h1 className="display-4 text-warning">{singleItem.name}</h1>
      <hr className="my-4" />

      {type === "person" && (
        <div>
          <p>Gender: {singleItem.gender}</p>
          <p>Hair Color: {singleItem.hairColor}</p>
          <p>Skin Color: {singleItem.skinColor}</p>
          <p>Eye Color: {singleItem.eyeColor}</p>
        </div>
      )}

      {type === "planet" && (
        <div>
          <p>Climate: {singleItem.climate}</p>
          <p>Terrain: {singleItem.terrain}</p>
          <p>Population: {singleItem.population}</p>
        </div>
      )}

      <Link to="/">
        <span className="btn btn-primary btn-lg mt-3">Back home</span>
      </Link>
    </div>
  );
};
