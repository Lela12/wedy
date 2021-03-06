import React, { FC } from 'react';
import styled from 'styled-components';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { WeatherData } from '../store/types';

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  return (
    <Container>
      <WeatherWrap>
        <CityName>{data.name}</CityName>
        <WeatherIcon>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt=""
          />
        </WeatherIcon>
        <WeatherTemp>
          <Temper>{data.main.temp}°</Temper>
          <TempIcon>
            <Icon>
              <AiFillCaretDown />
            </Icon>
            {data.main.temp_min}°
            <Icon>
              <AiFillCaretUp />
            </Icon>
            {data.main.temp_max}°
          </TempIcon>
        </WeatherTemp>
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
  flex-direction: column;
  list-style: none;
  margin: auto;
  line-height: 40px;
  padding: 30px;
`;

const WeatherTemp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CityName = styled.h4`
  font-size: 28px;
`;

const WeatherIcon = styled.span`
  margin-top: 10px;
  margin-bottom: 30px;
  img {
    width: 90px;
    height: 90px;
  }
`;

const Temper = styled.h2`
  font-size: 50px;
  margin-bottom: 30px;
`;

const TempIcon = styled.div`
  position: relative;
  left: -5px;
  display: flex;
  font-size: 17px;
`;

const Icon = styled.div`
  font-size: 20px;
  padding-left: 5px;
  padding-top: 2px;
`;

export default Weather;
