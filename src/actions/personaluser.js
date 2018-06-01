import {CHANGE_AUTH, PERSONAL_USER} from './types';

export function fillUpUserData(values, history){
  console.log(values);
  history.push("/WelcomeNewUser");
  return{
    type:CHANGE_AUTH,
    payload: PERSONAL_USER
  }
}