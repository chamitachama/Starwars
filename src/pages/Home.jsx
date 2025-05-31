import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [starred, setStarred] = useState(false);
  const [planetStarred, setPlanetStarred] = useState(false);

  const toggleStar = () => {
    setStarred(!starred);
    dispatch({
      type: starred ? "REMOVE_FAVORITE" : "ADD_FAVORITE",
      payload: { name: "Luke Skywalker", type: "character" },
    });
  };

  const togglePlanetStar = () => {
    setPlanetStarred(!planetStarred);
    dispatch({
      type: planetStarred ? "REMOVE_FAVORITE" : "ADD_FAVORITE",
      payload: { name: "Alderaan", type: "planet" },
    });
  };

  const cardStyle = {
    width: "400px",
    minHeight: "300px",
    display: "inline-block",
    marginRight: "1rem",
  };

  const scrollContainerStyle = {
    overflowX: "auto",
    whiteSpace: "nowrap",
    paddingBottom: "1rem",
  };

  return (
    <div className="mt-5 px-4">
      {/* Characters Section */}
      <h4 className="text-danger fs-2 mb-4">Characters</h4>
      <div style={scrollContainerStyle}>
        <div className="card" style={cardStyle}>
          <img
            src="https://insidethemagic.net/wp-content/uploads/2024/07/mark-hamill-luke-skywalker-400x200.jpg"
            className="card-img-top"
            alt="Luke Skywalker"
            style={{ width: "400px", height: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h1 className="card-title mb-3">Luke Skywalker</h1>
            <div className="card-text mb-3">
              <h5>Gender: Male</h5>
              <h5>Hair Color: Blonde</h5>
              <h5>Eye Color: Blue</h5>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-primary">Learn More</button>
              <button
                onClick={toggleStar}
                className="btn btn-link p-0"
                aria-label="Toggle favorite"
                style={{ fontSize: "1.8rem", color: starred ? "gold" : "gray" }}
              >
                {starred ? "★" : "☆"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Planets Section */}
      <h4 className="text-danger fs-2 mt-5 mb-4">Planets</h4>
      <div style={scrollContainerStyle}>
        <div className="card" style={cardStyle}>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C40%2C1280%2C640"
            className="card-img-top"
            alt="Alderaan"
            style={{ width: "400px", height: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h1 className="card-title mb-3">Alderaan</h1>
            <div className="card-text mb-3">
              <h5>Terrain: Mountains</h5>
              <h5>Population: 2,000,000,000</h5>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-primary">Learn More</button>
              <button
                onClick={togglePlanetStar}
                className="btn btn-link p-0"
                aria-label="Toggle favorite planet"
                style={{ fontSize: "1.8rem", color: planetStarred ? "gold" : "gray" }}
              >
                {planetStarred ? "★" : "☆"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

