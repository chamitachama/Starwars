// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect } from "react";

export const Single = () => {
  const { store } = useGlobalReducer()

  const { type, theId } = useParams()

  let singleItem;
  if (type === "person") {
    singleItem = store.people.find(p => p.uid === parseInt(theId));
  } else if (type === "planet") {
    singleItem = store.planets.find(p => p.uid === parseInt(theId));
  }

  useEffect(() => {
    if (!singleItem) return;

    const fetchDetail = async () => {
      try {
        const res = await fetch(singleItem.url);
        const data = await res.json();
        setDetail(data.result.properties);
      } catch (error) {
        console.error("Error fetching detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [singleItem]);

  if (!singleItem) return <p>Loading...</p>;
  if (loading) return <p>Loading detail...</p>;


  return (
    <div className="container text-center py-4">
      <h1 className="display-4 text-warning">{singleItem.name}</h1>
      <hr className="my-4" />

      {/* Si es persona */}
      {type === "character" && (
        <div>
          <p>Gender: {singleItem.gender}</p>
          <p>Hair Color: {singleItem.hair_color}</p>
          <p>Skin Color: {singleItem.skin_color}</p>
          <p>Eye Color: {singleItem.eye_color}</p>
        </div>
      )}

      {/* Si es planeta */}
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

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Single.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
