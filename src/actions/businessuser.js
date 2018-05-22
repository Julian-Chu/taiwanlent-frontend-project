import {BUSINESSUSER_LOGIN, CHANGE_AUTH, BUSINESS_USER} from './types';

export function signin({username, password}, history){
  localStorage.setItem("auth","true");
  history.push("/talents");
  return{
    type: CHANGE_AUTH,
    payload: BUSINESS_USER
  }
}

export function signup({username, password}, history){
  // todo: redirect after signup

  return{
    type: CHANGE_AUTH,
    payload: BUSINESS_USER
  }
}

export function fillUpUserData(values, history){
  console.log(values);
  return{
    type:CHANGE_AUTH,
    payload: BUSINESS_USER
  }
}


