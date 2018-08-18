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
  /*
  chinese : false
  chinese_certificate : null
  city : ""
  createdAt : "2018-08-15"
  driving_licence : false
  email : ""
  english : false
  english_certificate : null
  gender_id : 1
  german : false
  german_certificate : null
  living_year_in_germany : 0
  name : ""
  occupation : ""
  password : ""
  phone : ""
  photolink : null
  region_id : 1
  relocation : false
  resume_open : false
  school : ""
  self_introduction : null 
  subject_id : 1
  updatedAt : "2018-08-15"
  username : ""
   work_experience_1 : null
  work_experience_2 : null
  work_experience_3 : nul
  */
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
        gender: user.gender_id,
        email: user.email,
        chinese: user.chinese,
        chinese_certificate: user.chinese_certificate,
        city: user.city,
        licence: user.driving_licence,
        english: user.english,
        english_certificate: user.english_certificate,
        german: user.german,
        german_certificate: user.german_certificate,
        livingYearsInGermany: user.living_year_in_germany,
        name: user.name,
        occupation: user.occupation,
        phone: user.phone,
        photolink: user.photolink,
        region: user.region_id,
        relocation: user.relocation,
        resume_open: user.resume_open,
        school: user.school,
        selfIntroduction: user.self_introduction,
        subject: user.subject_id,
        workexperience_1: user.work_experience_1,
        workexperience_2: user.work_experience_2,
        workexperience_3: user.work_experience_3
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