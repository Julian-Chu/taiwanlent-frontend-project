import {CHANGE_AUTH, PERSONAL_USER, PERSONAL_USER_DATA} from './types';

export function fillUpUserData(values, history){
  console.log(values);
  history.push("/WelcomeNewUser");
  return{
    type:CHANGE_AUTH,
    payload: PERSONAL_USER
  }
}

export function GetPersonalUserData(){
  var userdata = {
    username: 'testUser',
    gender:'male',
    email:'test@test.com',
    name:'Tom Lee',
    phone:'1211313131',
    region: {
      label:"Berlin 柏林",
      value:"BE"
    },
    subject:{value: "ch", label: "化學化工"},
    german:true,
    german_certificate:"123"
  }
  console.log('GetPersonalBusinessUserData');
  return{
    type: PERSONAL_USER_DATA,
    payload: userdata
  }
}