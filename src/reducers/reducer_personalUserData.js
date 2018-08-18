import {
  PERSONAL_USER_DATA
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case PERSONAL_USER_DATA:
      console.log("personal user data:", action.payload);
      return action.payload;
    default:
      return state;
  }
}