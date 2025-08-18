import { SET_PLANETS } from "../constants/constantsTypes";

export const setPlanets = (planets) => ({
    type: SET_PLANETS,
    payload: planets,
})


export const fetchPlanets = async (dispatch) => {
    try{
        const response = await fetch("https://www.swapi.tech/api/planets")
        const data = await response.json();

        const planetDetails = await Promise.all(
            data.results.map(async (planet) =>{
                const responseDetail = await fetch(planet.url)
                const detail = await responseDetail.json();
                return {
                    id: detail.result.uid,
                    name: detail.result.properties.name,
                    url: detail.result.properties.url,

                };
            })
        );

        dispatch({type: SET_PLANETS, payload: planetDetails});
    }
    catch (error){
        console.error("Failed to fetch Planet:")
    }
    
};

export const fetchPlanetDetail = async (dispatch, url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const planetDetail = {
        id: data.result.uid,
        name: data.result.properties.name,
        climate: data.result.properties.climate,
        terrain: data.result.properties.terrain,
        population: data.result.properties.population,
        description: data.result.description,
      };
  
      dispatch({ type: "SET_PLANET_DETAIL", payload: planetDetail });
    } catch (error) {
      console.error("Failed to fetch planet detail:", error);
    }
  };