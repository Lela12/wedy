# :pushpin: Wedy

> 현재 위치에 따른 날씨의 옷차림을 추천해 주는 서비스
>
> https://wedy.netlify.app/

</br>

## 1. 제작 기간 & 참여 인원

- 2022년 4월 4일 ~ 4월 10일
- 개인 프로젝트

</br>

## 2. 사용 기술

- React 18
- Redux
- Typescript
- Styled-components

</br>

## 3. 주요 기능

- 현재 날씨에 따른 옷차림 추천

이 서비스의 주요 기능은 날씨 `OpenWeather API`를 이용해 날씨에 따른 옷차림 추천 기능입니다.  
사용자는 도시를 검색하면 해당하는 도시의 `현재 온도`, `최고/최저 온도의 정보`, 날씨에 맞는 `옷차림 추천`을 받게 됩니다.

</br>

## 4. 핵심 트러블 슈팅

### 4.1. 비동기 처리 문제

- open API를 사용하여 날씨 데이터를 비동기 처리로 화면에 보여줘야 했습니다.

- 하지만 리덕스에서 미들웨어 없이 비동기적인 액션 생성을 하려 하면 **에러**가 발생했습니다.

  <details>
  <summary><b>에러</b></summary>
  <div markdown="1">

  Uncaught Error: Actions must be plain objects. Instead, the actual type was: 'function'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions.

<details>
<summary><b>기존 코드</b></summary>
<div markdown="1">

```javascript
export const fetchWeatherData = (city: string) => async () => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );

  return {
    type: WEATHER_SUCESS,
    payload: res.data,
  };
};
```

</div>
</details>

- 비동기 요청을 하기 위해,

- 아래 **개선된 코드**와 같이 `Redux-Thunk`를 사용하여 액션 생성 함수를 리턴하여 특정 조건에서만 dispatch 하는 것을 가능하게 해주었습니다.

<details>
<summary><b>개선된 코드</b></summary>
<div markdown="1">

```javascript
export const fetchWeatherData =
  (city: string) => async (dispatch: Dispatch<WeatherDispatchType>) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );
      const { data } = res;

      dispatch({
        type: WEATHER_SUCESS,
        payload: data,
      });
    } catch (err) {
      Toast('error', '없는 도시입니다. 다시 입력 해주세요!');
    }
  };
```

</div>
</details>
</br>

## 6. 그 외 트러블 슈팅

<details>
<summary>.env 파일의 KEY가 불러와지지 않는 오류</summary>
<div markdown="1">

- `const API_KEY = process.env.REACT_APP_API_KEY;`
- API_KEY를 변수로 만들어서 넣어
- `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}` 해결

</div>
</details>

<details>
<summary>Netlify 배포시 오류</summary>
<div markdown="1">

- .env파일이 gitignore로 설정이 되어 있어서 api key에 접근을 못하게 되는 문제
- netlify에 환경변수를 설정하여 배포를 하여 해결

</div>
</details>
    
</br>
