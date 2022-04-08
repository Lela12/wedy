import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './reducers/weatherReducer';

const rootReducer = combineReducers({
  weatherReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
