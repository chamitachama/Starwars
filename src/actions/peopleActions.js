import { SET_PEOPLE } from "../constants/constantsTypes";
import { SET_IMAGE } from "../constants/constantsTypes";
import { SET_SINGLE } from "../constants/constantsTypes";

export const setPeople = (people) => ({
    type: SET_PEOPLE,
  payload: people,
})


  export const fetchPeople = async (dispatch) => {
    try {
        const storedPeople = localStorage.getItem("people");
        if (storedPeople) {
            dispatch({ type: SET_PEOPLE, payload: JSON.parse(storedPeople) });
            return; 
        }

        const response = await fetch("https://www.swapi.tech/api/people");
        const data = await response.json();

        const people = data.results.map((person) => ({
            id: person.uid,
            name: person.name,
            url: person.url
        }));

        dispatch({ type: SET_PEOPLE, payload: people });

        localStorage.setItem("people", JSON.stringify(people));
    } catch (error) {
        console.error("Failed to fetch people:", error);
    }
  };

export const fetchDetails = async (dispatch, type, id) => {
  try {
    const cacheKey = `${type}-${id}`;
    const storedDetails = localStorage.getItem(cacheKey);

    if (storedDetails) {
      dispatch({ type: SET_SINGLE, payload: JSON.parse(storedDetails) });
      return;
    } 

    const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
    console.log("Fetching:", response); 
    const data = await response.json();

    const details = data.result.properties;

    dispatch({ type: SET_SINGLE, payload: details });

    localStorage.setItem(cacheKey, JSON.stringify(details));
  } catch (error) {
    console.error("Failed to fetch details:", error);
  }
};

export const addFavorite = (item, type) => {
  dispatch({
    type: "ADD_FAVORITE",
    payload: {
      id: item.id,       
      name: item.name,
      type: type       
    },
  });
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