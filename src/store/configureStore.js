import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import placesReducer from './reducers/root';
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  places: placesReducer
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(reduxThunk))
  );
};

export default configureStore;
