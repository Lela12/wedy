import {
  WeatherDispatchType,
  WeatherState,
  WEATHER_LOADING,
  WEATHER_SUCESS,
} from '../types';

const initialState: WeatherState = {
  data: null,
  loading: false,
};

const weatherReducer = (
  state = initialState,
  action: WeatherDispatchType,
): WeatherState => {
  switch (action.type) {
    case WEATHER_SUCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case WEATHER_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default weatherReducer;
