import { ADD_PLACE, DELETE_PLACE } from './types';
import unsplash from '../../api/unsplash';
import noImageFound from '../../assets/NoImageFound.png';

export const addPlace = placeName => async dispatch => {
  const response = await unsplash.get('/search/photos', {
    params: { query: placeName }
  });
  var image = response.data.results[0]
    ? { uri: response.data.results[0].urls.regular }
    : noImageFound;
  dispatch({ type: ADD_PLACE, payload: { name: placeName, image } });
};

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    payload: key
  };
};
