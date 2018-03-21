import {BUSINESSUSER_LOGIN, CHANGE_AUTH} from './types';

export function businessUserLogin({username, password}, history){
  console.log(username, password);
  localStorage.setItem("auth","true");
  history.push("/");
  return{
    type: CHANGE_AUTH,
    payload: true
  }
}