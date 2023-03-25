export const MY_FAVORITES = 'MY_FAVORITES';
export const DELETE_FAVORITES = 'DELETE_FAVORITES';


export const getAllFavorites = () => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/bands`)
        .then(r => r.json())
        .then(data => {dispatch({type: MY_FAVORITES, payload: data})})
    }
};

export const deleteFavorites = (id) => {
    return {
        type: DELETE_FAVORITES,
        payload: id
    }
};