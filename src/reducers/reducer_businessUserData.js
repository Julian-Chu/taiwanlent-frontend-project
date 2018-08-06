import {
  BUSINESS_USER_DATA
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case BUSINESS_USER_DATA:
      console.log(action.payload);
      return action.payload;
    default:
      console.log('default state:', state);
      return state;
  }

}