import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";
import { useEffect } from "react";
import { fetchPeople } from "../actions/peopleActions.js";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  
  useEffect(() => {
    fetchPeople(dispatch);
  }, []);

  // const toggleStar = () => {
  //   setStarred(!starred);
  //   dispatch({
  //     type: starred ? "REMOVE_FAVORITE" : "ADD_FAVORITE",
  //     payload: { name: "Luke Skywalker", type: "character" },
  //   });
  // };

  // const togglePlanetStar = () => {
  //   setPlanetStarred(!planetStarred);
  //   dispatch({
  //     type: planetStarred ? "REMOVE_FAVORITE" : "ADD_FAVORITE",
  //     payload: { name: "Alderaan", type: "planet" },
  //   });
  // };

  // const cardStyle = {
  //   width: "400px",
  //   minHeight: "300px",
  //   display: "inline-block",
  //   marginRight: "1rem",
  // };

  // const scrollContainerStyle = {
  //   overflowX: "auto",
  //   whiteSpace: "nowrap",
  //   paddingBot

  return (
    <div className="mt-5 px-4">
      {/* Characters Section */}
      <h4 className="text-danger fs-2 mb-4">Characters</h4>
      <div>
        {store.people.map((person) =>
        <Card  
              key={person.id}
              id={person.id}
              img={person.url}
              name={person.name}
              gender={person.gender}
              hairColor={person.hairColor} />
          )}
      </div>

      {/* Planets Section */}
      <h4 className="text-danger fs-2 mt-5 mb-4">Planets</h4>
      <div>
      {/* {store.planets.map(planet,index)}
       < Card 
          key={id}
          img={planet.url}
          population ={planet.population}
          terrain ={planet.terrain}
        /> */}
      </div>
    </div>
  );
};

