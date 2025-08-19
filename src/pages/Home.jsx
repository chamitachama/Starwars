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
    return <p className="text-white">Loading info ...</p>;
  }
  return (
  <div className="container mt-5 px-4 ">
      <h4 className="text-warning fs-2 mb-4">Characters</h4>
      <Carousel dataType="people" />

      <h4 className="text-warning fs-2 my-4">Planets</h4>
      <Carousel dataType="planets" />
      </div>
  );
};

