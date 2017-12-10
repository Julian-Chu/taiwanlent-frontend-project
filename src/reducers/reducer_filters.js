import {FILTERS} from '../actions/index';

export default function(state=[], action){
  console.log(action.payload);
  switch(action.type){    
    case FILTERS:
      return [...action.payload];
    default:
      return state;
  }
}