import {
  CHANGE_AUTH,
  LOGOUT
} from '../actions/types';

export default function (state = false, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      console.log('CHANGE_AUTH');
      return action.payload;
    case LOGOUT:
      console.log('Logout');
      return false;
    default:
      console.log('requiredAuth state:', state);
      return state;
  }
}