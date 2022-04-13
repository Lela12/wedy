import React, { FC } from 'react';
import styled from 'styled-components';
import { WeatherData } from '../store/types';

interface WeatherProps {
  data: WeatherData;
}

const Clothes: FC<WeatherProps> = ({ data }) => {
  if (!data) return <p> 날씨 정보가 없습니다.</p>;

  const currentTemp = data.main.temp;

  const summer = currentTemp >= 27;
  const beginSummer = currentTemp >= 23 && currentTemp < 26;
  const earlySummer = currentTemp >= 20 && currentTemp <= 22;
  const earlyFall = currentTemp >= 17 && currentTemp < 19;
  const fall = currentTemp >= 12 && currentTemp < 16;
  const beginWinter = currentTemp >= 10 && currentTemp < 11;
  const earlyWinter = currentTemp >= 6 && currentTemp < 9;

  const weatherClothes = () => {
    if (summer) {
      return '민소매, 반바지, 원피스';
    }
    if (beginSummer) {
      return '반팔, 얇은 셔츠, 반바지, 면바지';
    }
    if (earlySummer) {
      return '얇은 가디건, 긴팔, 면바지, 청바지';
    }
    if (earlyFall) {
      return '얇은 니트, 맨투맨, 가디건, 청바지';
    }
    if (fall) {
      return '자켓, 가디건, 야상, 스타킹, 청바지, 면바지';
    }
    if (beginWinter) {
      return '자켓, 트렌치 코트, 야상, 니트, 청바지, 스타킹';
    }
    if (earlyWinter) {
      return '코트, 가죽자켓, 히트텍, 니트, 레깅스';
    }

    return '패딩, 두꺼운 코트, 목도리, 기모제품';
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
  margin-top: 60px;
  height: 300px;
  padding: 20px;
  border: 0.1px solid lightgray;
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

const Title = styled.h3`
  font-size: 26px;
  font-weight: 800;
  color: gray;
`;

const ClothesRecomend = styled.h5`
  font-size: 22px;
  font-weight: 700;
`;
