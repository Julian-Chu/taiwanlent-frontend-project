import {FILTERS} from '../actions/index';

export default function(state=[], action){
  switch(action.type){
    case FILTERS:
      return state;
    default:
      return state;
  }
}