import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Search from './components/Search';
import { RootState } from './store';
import Weather from './components/Weather';

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
      <Title>Wedy</Title>
      <Search />
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        weatherData && <Weather data={weatherData} />
      )}
      {error && <p>해당하는 도시가 없습니다.</p>}
    </Container>
  );
};

export default App;

const Container = styled.div`
  padding-top: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 10px;
  font-size: 25px;
  font-weight: 700;
  line-height: 33px;
`;

const Loading = styled.h3``;
