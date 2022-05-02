import React, { FC } from 'react';
import styled from 'styled-components';
import { WeatherData } from '../store/types';

interface WeatherProps {
  data: WeatherData;
}

const Clothes: FC<WeatherProps> = ({ data }) => {
  const currentTemp = data.main.temp;

  const summer = '민소매, 반바지, 원피스';
  const beginSummer = '반팔, 얇은 셔츠, 반바지, 면바지';
  const earlySummer = '얇은 가디건, 긴팔, 면바지, 청바지';
  const earlyFall = '얇은 니트, 맨투맨, 가디건, 청바지';
  const fall = '자켓, 가디건, 야상, 스타킹, 청바지, 면바지';
  const beginWinter = '자켓, 트렌치 코트, 니트, 청바지, 스타킹';
  const earlyWinter = '코트, 가죽자켓, 히트텍, 니트, 레깅스';
  const winter = '패딩, 두꺼운 코트, 목도리, 기모제품';

  const weatherClothes = () => {
    if (currentTemp >= 4 && currentTemp < 9) {
      return earlyWinter;
    }
    if (currentTemp >= 9 && currentTemp < 12) {
      return beginWinter;
    }
    if (currentTemp >= 12 && currentTemp < 17) {
      return fall;
    }
    if (currentTemp >= 17 && currentTemp < 20) {
      return earlyFall;
    }
    if (currentTemp >= 20 && currentTemp <= 23) {
      return earlySummer;
    }
    if (currentTemp >= 23 && currentTemp < 28) {
      return beginSummer;
    }
    if (currentTemp >= 28) {
      return summer;
    }
    return winter;
  };

  return (
    <ClothesWrap>
      <ClothesDes>
        <Title>오늘의 코디 추천!</Title>
        <ClothesRecomend>{weatherClothes()}</ClothesRecomend>
      </ClothesDes>
    </ClothesWrap>
  );
};

export default Clothes;

const ClothesWrap = styled.div`
  margin-top: 30px;
  height: 300px;
  padding: 20px;
  border: 1px solid lightgray;
`;

const ClothesDes = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  list-style: none;
  margin: auto;
  line-height: 35px;
`;

const Title = styled.h4`
  font-size: 23px;
  font-weight: 800;
  color: gray;
`;

const ClothesRecomend = styled.h5`
  font-size: 17px;
  font-weight: 700;
`;
