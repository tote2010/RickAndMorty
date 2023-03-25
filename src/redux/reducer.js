import {
    MY_FAVORITES,
    DELETE_FAVORITES,
 } from '../actions';


const initialState = {
    myFavorites: [],
 };

 const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
          case MY_FAVORITES:
              return {
                  ...state,
                  myFavorites:action.payload
              }
          case DELETE_FAVORITES:
              return{
                  ...state,
                  myFavorites: state.bands.filter(band => band.id !== action.payload)
              }// todo lo que sea distinto lo agregara
          default: return state
    }
  };

 export default reducer;