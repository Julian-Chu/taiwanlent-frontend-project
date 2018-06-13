import { CHANGE_AUTH, BUSINESS_USER, BUSINESS_USER_DATA} from './types';

export function signin({username, password}, history){
  // get token from backend API
  localStorage.setItem("auth","true");
  history.push("/talents");
  return{
    type: CHANGE_AUTH,
    payload: BUSINESS_USER
  }
}

export function signup({username, password}, history){
  // call API to add new user
  // todo: redirect after signup
  history.push("/BusinessUserRegister")

  return{
    type: CHANGE_AUTH,
    payload: null
  }
}

export function fillUpUserData(values, history){
  // call API to fill up data for new user
  console.log(values);
  history.push("/WelcomeNewUser");
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

export function UpdateBusinessUserData(values, setFieldsDisabled){
  // todo: put/patch 
  var userdata = values;
  setFieldsDisabled();
  return{
    type: BUSINESS_USER_DATA,
    payload: userdata
  }

}


