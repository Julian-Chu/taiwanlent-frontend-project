import {BUSINESS_USER_DATA} from '../actions/types';

export default function(state=null, action){
  switch(action.type){
    case BUSINESS_USER_DATA:
      return action.payload;
    default:
      return state;
  }

}