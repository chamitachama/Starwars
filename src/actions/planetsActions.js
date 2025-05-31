import { SET_PLANETS } from "../constants/constantsTypes";

export const setPlanets = (planets) => ({
    type: SET_PLANETS,
    payload: planets,
})
