import {FETCH_WEATHER} from '../actions/index';
export default function(state=[],action){
  // the action here has the payload property resolved by redux-promise library
   switch(action.type)
   {
     //never mutate the state , return completely new state
// state.push(action.payload.data) will mutate the state
     case FETCH_WEATHER:
     return [action.payload.data, ...state];
   }
   return state;
}
