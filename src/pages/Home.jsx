import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { Carousel } from "../components/Carousel.jsx";
import { fetchPeople } from "../actions/peopleActions.js";
import { fetchPlanets } from "../actions/planetsActions.js";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await fetchPeople(dispatch);
      await fetchPlanets(dispatch);
      setIsLoading(false); 
    };

    loadData();
  }, [dispatch]);

  if (isLoading) {
    return <p className="text-white">Loading info from API...</p>;
  }
  return (
    <div className="mt-5 px-4 ">
      {/* Characters Section */}
      <h4 className="text-warning fs-2 mb-4">Characters</h4>
      <Carousel
        items={store.people} 
        renderItem={(character) => ({
          id: character.uid,
          type: "character",
          // img: character.image,
          name: character.name,
          gender: character.gender,
          hairColor: character.hairColor,
          skinColor: character.skinColor,
          eyeColor: character.eyeColor,
        })}/>
     
        

      {/* Planets Section */}
      <h4 className="text-warning fs-2 mt-5 mb-4">Planets</h4>
      <div>
      <Carousel 
        items={store.planets} 
        renderItem={(planet) => ({
          id: planet.uid,
          type: "planet",  
          // img: planet.url,
          name: planet.name,
          population: planet.population,
          terrain: planet.terrain,
          climate: planet.climate,
          gravity: planet.gravity,
        })}
      />
      </div>
    </div>
  );
};

