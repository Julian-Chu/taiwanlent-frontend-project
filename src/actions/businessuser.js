import {BUSINESSUSER_LOGIN, CHANGE_AUTH} from './types';

export function signin({username, password}, history){
  localStorage.setItem("auth","true");
  history.push("/talents");
  return{
    type: CHANGE_AUTH,
    payload: true
  }
}

export function signup({username, password}, history){
  // todo: redirect after signup

  return{
    type: CHANGE_AUTH,
    payload:true
  }
}