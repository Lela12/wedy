import axios from 'axios';
import { Dispatch } from 'react';
import {
  WeatherDispatchType,
  WEATHER_FAIL,
  WEATHER_LOADING,
  WEATHER_SUCESS,
} from '../types';

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWeatherData =
  (city: string) => async (dispatch: Dispatch<WeatherDispatchType>) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
      );
      const { data } = res;
      dispatch({
        type: WEATHER_SUCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: WEATHER_FAIL,
        payload: err.message,
      });
    }
  };

export const openweatherLoading = (): WeatherDispatchType => {
  return {
    type: WEATHER_LOADING,
  };
};

export const openweatherFail = (): WeatherDispatchType => {
  return {
    type: WEATHER_FAIL,
    payload: '',
  };
};
