import axios from 'axios';
import { Dispatch } from 'react';
import Toast from '../../utils/toast';
import { WeatherDispatchType, WEATHER_LOADING, WEATHER_SUCESS } from '../types';

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWeatherData =
  (city: string) => async (dispatch: Dispatch<WeatherDispatchType>) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );
      const { data } = res;

      dispatch({
        type: WEATHER_SUCESS,
        payload: data,
      });
    } catch (err) {
      Toast('error', '없는 도시입니다. 다시 입력 해주세요!');
    }
  };

export const openweatherLoading = (): WeatherDispatchType => {
  return {
    type: WEATHER_LOADING,
  };
};
