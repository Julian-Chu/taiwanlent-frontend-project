import {CHANGE_AUTH} from './types';

export function logout(){
  console.log('logout');
  localStorage.removeItem("auth")
  return{
    type: CHANGE_AUTH,
    payload: null
  }
}