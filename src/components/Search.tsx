import React, { useState, FormEvent } from 'react';
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

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(openweatherLoading());
    dispatch(fetchWeatherData(cityName));
    setCityName('');
  };

  return (
    <Container>
      <SearchWrap onSubmit={submitHandler}>
        <SearchBox>
          <input
            type="text"
            placeholder="현재 위치를 입력해 주세요"
            value={cityName}
            onChange={handleCityName}
          />
        </SearchBox>
        <SearchButton>
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
  margin-top: 80px;
  margin-bottom: 50px;
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

  input {
    border: 1px solid lightgray;
    background-color: transparent;
    font-size: 17px;
    line-height: 1;
    color: #111;
    width: 330px;
    height: 45px;
    padding: 5px;
    border-radius: 20px;
    text-indent: 5%;
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
  font-size: 20px;
  opacity: 0.8;
  cursor: pointer;
`;
