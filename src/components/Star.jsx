import useGlobalReducer from "../hooks/useGlobalReducer";

export const Star = ({name, type}) => {
    const { store, dispatch } = useGlobalReducer();
    const starred = store.favorites.some(item => item.name === name);

    return (
        <button onClick={() => toggleStar(name, type, starred, dispatch)} style={{border: 'none', background: 'none', padding: 0, cursor: 'pointer', }}>{ starred ? ( <><i class="fa-solid fa-heart"></i></>) : (<><i class="fa-regular fa-heart"></i></>) }  </button>
    )
}

const toggleStar = (name, type, starred, dispatch) => {
    dispatch({
        type: starred ? "REMOVE_FAVORITE" : "ADD_FAVORITE",
        payload: { name: name, type: type },
    });
};