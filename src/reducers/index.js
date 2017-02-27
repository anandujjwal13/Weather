import { combineReducers } from 'redux';
import WeatherReduce from './reducer_weather'
const rootReducer = combineReducers({
  weather:WeatherReduce
});

export default rootReducer;
