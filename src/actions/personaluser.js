import {
  CHANGE_AUTH,
  PERSONAL_USER,
  PERSONAL_USER_DATA
} from './types';

import axios from 'axios';
import {
  logout
} from './logout';

export function fillUpUserData(values, history) {
  console.log(values);
  history.push("/WelcomeNewUser");
  return {
    type: CHANGE_AUTH,
    payload: PERSONAL_USER
  }
}

export function GetPersonalUserData(history) {
  // var userdata = {
  //   username: 'testUser',
  //   gender:'male',
  //   email:'test@test.com',
  //   name:'Tom Lee',
  //   phone:'1211313131',
  //   region: {
  //     label:"Berlin 柏林",
  //     value:"BE"
  //   },
  //   subject:{value: "ch", label: "化學化工"},
  //   german:true,
  //   german_certificate:"123"
  // }
  // console.log('GetPersonalBusinessUserData');
  // return{
  //   type: PERSONAL_USER_DATA,
  //   payload: userdata
  // }
  let token = localStorage.getItem('Authorization');

  return dispatch => {
    axios.get('/api/personaluser', {
      headers: {
        Authorization: token
      }
    }).then((response) => {
      console.log('response:', response);
      let user = response.data;
      let userdata = {
        username: user.username,
        gender: user.gender,
        email: user.email,
        name: user.name,
        phone: user.phone,
        companyName: user.companyName,
        department: user.department,
        companyLocation: user.companyLocation,
        address: user.address,
        industry: user.industry,
        productIntroduction: user.productIntroduction

      };
      dispatch(GetPeronsalUserDataAsync(userdata));
    }).catch(err => {
      console.log('err:', err);
      console.log('response:', err.response);
      if (err.response && err.response.status === 401) {

        // setTimeout(
        //   () => history.push("/login"), 1000
        // )
        dispatch(logout())
        history.push("/login");
      } else {
        console.log('response:', err.response)
        dispatch(logout())
        history.push("/login");
      }

    });
  }
}

function GetPeronsalUserDataAsync(userdata) {
  return {
    type: PERSONAL_USER_DATA,
    payload: userdata
  }
}

export function UpdateUserData(values, setFieldsDisabled) {
  console.log(values);
  setFieldsDisabled();
  return {
    type: PERSONAL_USER_DATA,
    payload: values
  }
}