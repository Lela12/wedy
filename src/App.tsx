import React from 'react';
import styled from 'styled-components';
import Search from './components/Search';

const App = () => {
  return (
    <div>
      <Container>
        <Title>Wedy</Title>
        <Search />
      </Container>
    </div>
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
