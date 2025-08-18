import { SET_PEOPLE } from "../constants/constantsTypes";
import { SET_IMAGE } from "../constants/constantsTypes";

export const setPeople = (people) => ({
    type: SET_PEOPLE,
  payload: people,
})


export const fetchPeople = async (dispatch) => {
    try{
        const response = await fetch("https://www.swapi.tech/api/people")
        const data = await response.json();

        const people = data.results.map((p) => ({
            id: p.uid,   
            name: p.name,
            url: p.url  
          }));
        dispatch({type: SET_PEOPLE, payload: people});
    }
    catch (error){
        console.error("Failed to fetch people:", error)
    }
    
};

export const fetchCharacterDetail = async (dispatch, url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const characterDetail = {
        id: data.result.uid,
        name: data.result.properties.name,
        gender: data.result.properties.gender,
        hairColor: data.result.properties.hair_color,
        skinColor: data.result.properties.skin_color,
        eyeColor: data.result.properties.eye_color,
        description: data.result.description,
      };
  
      dispatch({ type: "SET_CHARACTER_DETAIL", payload: characterDetail });
    } catch (error) {
      console.error("Failed to fetch character detail:", error);
    }
  };
  
  

export const fetchImage = async (dispatch) => {
    try {
        const response = await fetch("https://www.akabab.github.io/starwars-api/all.json")
        const data = await response.json();

        data.results.map(async (people) =>{
            const responseDetail = await fetch(character.url)
            const detail = await responseDetail.json();
            return {
                name: character.name.id,
                image: character.image.id
            };
        })

        // dispatch ({type: SET_IMAGE, payload: people })   
    }
    catch (error){
        console.error("Failed to fetch img:")
    }

}