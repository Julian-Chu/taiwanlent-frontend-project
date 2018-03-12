import {BUSINESSUSER_LOGIN, CHANGE_AUTH} from './types';

export function businessUserLogin({username, password}){
  console.log(username, password);
  localStorage.setItem("auth","true");
  return{
    type: CHANGE_AUTH,
    payload: true
  }
}