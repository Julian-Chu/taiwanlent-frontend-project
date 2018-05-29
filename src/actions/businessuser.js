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
  history.push("/BusinessUserRegister")

  return{
    type: CHANGE_AUTH,
    payload: null
  }
}

export function fillUpUserData(values, history){
  console.log(values);
  // redirect to?
  return{
    type:CHANGE_AUTH,
    payload: BUSINESS_USER
  }
}
export function GetBusinessUserData(){
  //todo: get business user data
  var userdata = {
    username: 'testUser',
    gender:'male',
    email:'test@test.com',
    name:'Tom Lee',
    phone:'1211313131',
    companyName:'Unknown',
    department:'PD',
    companyLocation: 'Berlin',
    address: '....',
    industry:'Computer',
    productIntroduction:'no'

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


