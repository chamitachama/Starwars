import { json } from "react-router-dom";
import { SET_PLANETS } from "../constants/constantsTypes";

export const setPlanets = (planets) => ({
    type: SET_PLANETS,
    payload: planets,
})


export const fetchPlanets = async (dispatch) => {
    try{

        const storedPlanets = localStorage.getItem("planets");
        if (storedPlanets) {
            dispatch({ type: SET_PLANETS, payload: JSON.parse(storedPlanets) });
            return; 
        }

        const response = await fetch("https://www.swapi.tech/api/planets")
        const data = await response.json();

        const planets= data.results.map((planet)=>({
            id: planet.uid,
            name: planet.name,
            url: planet.url

        }));

        dispatch({type: SET_PLANETS, payload: planets});


        localStorage.setItem("planets", JSON.stringify(planets));
    } catch (error) {
        console.error("Failed to fetch planets:", error);
    }
    
    
};