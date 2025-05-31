export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
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
