import useGlobalReducer from "../hooks/useGlobalReducer";

export const Star = ({name, type}) => {
    const { store, dispatch } = useGlobalReducer();
    const starred = store.favorites.some(item => item.name === name);

    return (
        <button onClick={() => toggleStar(name, type, starred, dispatch)}>{ starred ? "FAV" : "NO FAV" } ☆ </button>
    )
}

const toggleStar = (name, type, starred, dispatch) => {
    dispatch({
        type: starred ? "REMOVE_FAVORITE" : "ADD_FAVORITE",
        payload: { name: name, type: type },
    });
};