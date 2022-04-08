import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import WeatherReducer from './reducers/weatherReducer';

const rootReducer = combineReducers({
  WeatherReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
