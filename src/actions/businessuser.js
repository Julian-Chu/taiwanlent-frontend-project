import {BUSINESSUSER_LOGIN, CHANGE_AUTH, BUSINESS_USER, BUSINESS_USER_DATA} from './types';

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
export function GetBusinessUserData(){
  //todo: get business user data
  var userdata = {
    username: 'testUser',
    gender:'male'
  };
  console.log('GetUserData');
  return{
    type: BUSINESS_USER_DATA,
    payload: userdata
  }
}

export function UpdateBusinessUserDate(values){
  // todo: put/patch 
  var userdata = values;
  return{
    type: BUSINESS_USER_DATA,
    payload: userdata
  }

}


