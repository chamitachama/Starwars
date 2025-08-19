import useGlobalReducer from "../hooks/useGlobalReducer";

export const Fav = ({name, type}) => {
    const { store, dispatch } = useGlobalReducer();
    const starred = store.favorites.some(item => item.name === name);

    return (
        <button className="btn btn-warning" onClick={() => toggleFav(name, type, starred, dispatch)}>
            { starred ? ( <i className=" fa-solid fa-heart"></i>) : (<i class="fa-regular fa-heart"></i>)}  </button>
    )
}

const toggleFav = (name, type, starred, dispatch) => {
    dispatch({
        type: starred ? "REMOVE_FAVORITE" : "ADD_FAVORITE",
        payload: { name: name, type: type },
    });
};


