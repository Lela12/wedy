import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import {
  fetchWeatherData,
  openweatherLoading,
} from '../store/actions/weatherActions';

const Search = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');

  const handleCityName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  };

  const searchButtonTapped = () => {
    dispatch(openweatherLoading());
    dispatch(fetchWeatherData(cityName));
    setCityName('');
  };

  return (
    <Container>
      <SearchWrap>
        <SearchBox>
          <input
            type="text"
            placeholder="현재 위치를 입력해 주세요"
            value={cityName}
            onChange={handleCityName}
          />
        </SearchBox>
        <SearchButton onClick={searchButtonTapped}>
          <FaSearch />
        </SearchButton>
      </SearchWrap>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
`;

const SearchWrap = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 38px;

  input {
    border: 1px solid lightgray;
    background-color: transparent;
    font-size: 5px;
    line-height: 1.15;
    color: #111;
    width: 170px;
    padding: 5px;
  }

  input::placeholder {
    color: #aaa;
  }

  input:focus {
    outline: 0;
  }
`;

const SearchButton = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  padding-left: 4px;
  font-size: 1rem;
  cursor: pointer;
`;
