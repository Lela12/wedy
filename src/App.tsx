import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Search from './components/Search';
import { RootState } from './store';
import Weather from './components/Weather';
import Clothes from './components/Clothes';

const antIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />;

const App = () => {
  const weatherData = useSelector(
    (state: RootState) => state.weatherReducer.data,
  );
  const loading = useSelector(
    (state: RootState) => state.weatherReducer.loading,
  );

  return (
    <Container>
      <Title>
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="" />
      </Title>
      <Search />
      {loading ? (
        <SpinWrap>
          <Spin indicator={antIcon} />
        </SpinWrap>
      ) : (
        weatherData && (
          <WeatherWrap>
            <Weather data={weatherData} />
            <Clothes data={weatherData} />
          </WeatherWrap>
        )
      )}
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  height: 50px;
  img {
    width: 150px;
    padding: 0;
  }
`;

const SpinWrap = styled.div`
  padding: 80px;
`;

const WeatherWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 90%;
  height: 400px;
`;
