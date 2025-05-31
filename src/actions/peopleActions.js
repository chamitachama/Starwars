import { SET_PEOPLE } from "../constants/constantsTypes";

export const setPeople = (people) => ({
    type: SET_PEOPLE,
  payload: people,
})

export const fetchPeople = async (dispatch) => {
    try{
        const response = await fetch("https://www.swapi.tech/api/people")
        const data = await response.json();

        const personDetails = await Promise.all(
            data.results.map(async (person) =>{
                const responseDetail = await fetch(person.url)
                const detail = await responseDetail.json();
                return {
                    id: detail.result.uid,
                    name: detail.result.properties.name,
                    gender: detail.result.properties.gender,
                    hairColor :detail.result.properties.hair_color
                };
            })
        );

        dispatch({type: SET_PEOPLE, payload: personDetails});
    }
    catch (error){
        console.error("Failed to fetch people:")
    }
    
};