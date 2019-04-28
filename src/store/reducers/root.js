import { ADD_PLACE, DELETE_PLACE } from '../actions/types';

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.payload.name,
          image: action.payload.image
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.payload;
        })
      };
    default:
      return state;
  }
};

export default reducer;
