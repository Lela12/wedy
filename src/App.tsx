import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Search from './components/Search';
import { RootState } from './store';
import Weather from './components/Weather';
import Clothes from './components/Clothes';

const App = () => {
  const weatherData = useSelector(
    (state: RootState) => state.weatherReducer.data,
  );
  const loading = useSelector(
    (state: RootState) => state.weatherReducer.loading,
  );
  const error = useSelector((state: RootState) => state.weatherReducer.error);

  return (
    <Container>
      <Title>
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="" />
      </Title>
      {/* <Title>Wedy</Title> */}
      <Search />
      {loading ? (
        <Loading>로딩중...</Loading>
      ) : (
        weatherData && (
          <WeatherWrap>
            <Weather data={weatherData} />
            <Clothes data={weatherData} />
          </WeatherWrap>
        )
      )}
      {error && <p>해당하는 도시가 없습니다.</p>}
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

const Loading = styled.h3``;
const WeatherWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 90%;
  height: 400px;
`;
