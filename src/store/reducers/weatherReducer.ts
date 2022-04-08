import {
  WeatherDispatchType,
  WeatherState,
  WEATHER_FAIL,
  WEATHER_LOADING,
  WEATHER_SUCESS,
} from '../types';

const initialState: WeatherState = {
  data: null,
  loading: false,
  success: false,
  error: '',
};

const WeatherReducer = (
  state = initialState,
  action: WeatherDispatchType,
): WeatherState => {
  switch (action.type) {
    case WEATHER_SUCESS:
      return {
        ...state,
        success: true,
        loading: false,
        error: '',
        data: action.payload,
      };
    case WEATHER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case WEATHER_FAIL:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default WeatherReducer;
