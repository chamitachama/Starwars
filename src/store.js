import { SET_PEOPLE, SET_PLANETS, SET_SINGLE } from "./constants/constantsTypes"

export const initialStore = () => {
  return {
    people: [],
    planets: [],
    favorites: [],
    vehicles:[],
    single: null,

    // character: {
    //   uid: null,
    //   name: '',
    //   url: '',
    //   image: '',
    //   description: '',
    //   gender: '',
    // },

    // planet: {
    //   uid: null,
    //   name: '',
    //   url: '',
    //   image: '',
    //   description: '',
    //   climate: '',
    //   terrain: '',
    //   population: '',
    // },

    // vehicle: {
    //   uid: null,
    //   name: '',
    //   url: '',
    //   image: '',
    //   description: '',
    //   model: '',
    // },
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case SET_PEOPLE: {
      return { ...store, people: action.payload };
    }
    case SET_PLANETS: {
      return { ...store, planets: action.payload };
    }

    case 'ADD_FAVORITE': {
      const exists = store.favorites.some(item => item.name === action.payload.name);
      if (exists) return store; 

      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };
    }

    case 'REMOVE_FAVORITE': {
      return {
        ...store,
        favorites: store.favorites.filter(item => item.name !== action.payload.name)
      };
    }
    
    case SET_SINGLE:
      return {
        ...store,
        single: action.payload,
      };
    

      

    default:
      throw Error('Unknown action.');
  }
}
