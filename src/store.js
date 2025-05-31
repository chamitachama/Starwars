import { SET_PEOPLE } from "./constants/constantsTypes"

export const initialStore = () => {
  return {
    people: [],
    planets: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'add_task': {
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map(todo =>
          todo.id === id ? { ...todo, background: color } : todo
        )
      };
    }

    case SET_PEOPLE: {
      return { ...store, people: action.payload };
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

    default:
      throw Error('Unknown action.');
  }
}
