import React, { FC } from 'react';
import styled from 'styled-components';
import { WeatherData } from '../store/types';

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const celsius = (data.main.temp - 273.15).toFixed(2);

  return (
    <Container>
      <WeatherWrap>
        <CityName>
          {data.name} - {data.sys.country}
        </CityName>

        <WeatherIcon>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt=""
          />
        </WeatherIcon>
        <WeatherTemp>{celsius}°C</WeatherTemp>
      </WeatherWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
`;
const WeatherWrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 55px;
  list-style: none;
  margin: auto;
  line-height: 20px;
  margin-top: 10px;
`;
const CityName = styled.h2`
  font-size: 12px;
`;

const WeatherIcon = styled.span`
  float: left;
`;
const WeatherTemp = styled.h2`
  font-size: 12px;
`;

export default Weather;
