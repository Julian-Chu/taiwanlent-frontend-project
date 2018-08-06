import {
  CHANGE_AUTH,
  BUSINESS_USER,
  BUSINESS_USER_DATA
} from './types';

import axios from 'axios';

export function signin({
  username,
  password
}, history) {
  // :get token from backend API
  localStorage.setItem("Authorization", "tokenFromBackend");
  history.push("/talents");
  return {
    type: CHANGE_AUTH,
    payload: BUSINESS_USER
  }
}

export function google_signin(token, history) {
  // get token from backend API
  localStorage.setItem("Authorization", `Bearer ${token}`);
  history.push("/login");
  return {
    type: CHANGE_AUTH,
    payload: BUSINESS_USER
  }
}

export function signup({
  username,
  password
}, history) {
  // call API to add new user
  // todo: redirect after signup
  history.push("/BusinessUserRegister")

  return {
    type: CHANGE_AUTH,
    payload: null
  }
}

export function fillUpUserData(values, history) {
  // call API to fill up data for new user
  console.log(values);
  history.push("/WelcomeNewUser");
  return {
    type: CHANGE_AUTH,
    payload: BUSINESS_USER
  }
}
export function GetBusinessUserData() {
  let token = localStorage.getItem('Authorization');

  return dispatch => {
    axios.get('/api/businessuser', {
      headers: {
        Authorization: token
      }
    }).then((response) => {
      let user = response.data.user;
      let userdata = {
        username: user.username,
        gender: user.gender_id === 1 ? "male" : "female",
        email: user.email || "please find email",
        name: user.name,
        phone: user.phone,
        companyName: user.company_name,
        department: user.department,
        companyLocation: user.company_location,
        address: user.address,
        industry: user.industry,
        productIntroduction: user.production_introduction || 'What kind of Product?'

      };
      dispatch(GetBusinessUserDataAsync(userdata));
    }).catch(err => console.log(err));
  }

  /*
 data :
user :
address : null 
company_location : ""
company_name : null
createdAt : "2018-08-06"
department : null
email : ""
emailVerified : false
gender_id : 1
industry : ""
name : ""
password : ""
phone : ""
product_introduction : ""
updatedAt : "2018-08-06"
username : null 
*/

  // return {
  //   type: BUSINESS_USER_DATA,
  //   payload: userdata
  // }
}

function GetBusinessUserDataAsync(user) {
  return {
    type: BUSINESS_USER_DATA,
    payload: user
  }
}

export function UpdateBusinessUserData(values, setFieldsDisabled) {
  // todo: put/patch 
  var userdata = values;
  setFieldsDisabled();
  return {
    type: BUSINESS_USER_DATA,
    payload: userdata
  }

}