import Axios from 'axios';
const API_KEY='24389f2755e4e792eea1093e35bb68d9';
const Rooturi=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric&q=`;
export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchweather(city){

  const countrycode='in';
  const uri=`${Rooturi}${city},${countrycode}`;
  const request=Axios.get(uri);
// request is a promise here as it waits for the ajax response
// redux-promise unresolves the promise part and gives an action of same type
//and payload as the resolved promise
  return {
     type:FETCH_WEATHER,
     payload:request
  };
}
