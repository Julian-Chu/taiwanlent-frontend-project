import {
  CHANGE_AUTH,
  PERSONAL_USER,
  PERSONAL_USER_DATA
} from "./types";

import axios from "axios";
import {
  logout
} from "./logout";

import region from "../components/common/regions";
import subject from "../components/common/subjects";
import {
  APIServer
} from "../globalsetting";

export function fillUpUserData(values, history) {
  console.log(values);
  history.push("/WelcomeNewUser");
  return {
    type: CHANGE_AUTH,
    payload: PERSONAL_USER
  };
}

export function GetPersonalUserData(history) {
  let token = localStorage.getItem("Authorization");
  return dispatch => {
    axios
      .get(`${APIServer}/api/personaluser`, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        console.log("response:", response);
        let user = response.data;
        let userdata = {
          username: user.username,
          gender: user.gender,
          email: user.email,
          chinese: user.chinese,
          chinese_certificate: user.chinese_certificate,
          city: user.city,
          licence: user.licence,
          english: user.english,
          english_certificate: user.english_certificate,
          german: user.german,
          german_certificate: user.german_certificate,
          livingYearsInGermany: user.livingYearsInGermany,
          name: user.name,
          occupation: user.occupation,
          phone: user.phone,
          photolink: user.photolink,
          region: region.find(target => target.value === user.region),
          relocation: user.relocation,
          resume_open: user.resume_open,
          school: user.school,
          selfIntroduction: user.selfIntroduction,
          subject: subject.find(target => target.value === user.subject),
          workExperience_1: user.workExperience_1,
          workExperience_2: user.workExperience_2,
          workExperience_3: user.workExperience_3
        };
        dispatch(GetPeronsalUserDataAsync(userdata));
      })
      .catch(err => {
        console.log("err:", err);
        console.log("response:", err.response);
        if (err.response && err.response.status === 401) {
          // setTimeout(
          //   () => history.push("/login"), 1000
          // )
          dispatch(logout());
          history.push("/login");
        } else {
          console.log("response:", err.response);
          dispatch(logout());
          history.push("/login");
        }
      });
  };
}

function GetPeronsalUserDataAsync(userdata) {
  return {
    type: PERSONAL_USER_DATA,
    payload: userdata
  };
}

export function UpdatePersonalUserDataAsync(values, disableForm) {
  console.log("async:", values);
  if (disableForm != null)
    disableForm();
  return {
    type: PERSONAL_USER_DATA,
    payload: values
  };
}

export function UpdatePersonalUserData(values, disableForm) {
  let token = localStorage.getItem("Authorization");
  console.log("UpdatePersonalUserData:", values);
  let user = values;
  let userdata = {
    username: user.username,
    email: user.email,
    name: user.name,
    phone: user.phone,
    city: user.city,
    occupation: user.occupation,
    livingYearInGermany: user.livingYearInGermany,
    school: user.school,
    workExperience_1: user.workExperience_1,
    workExperience_2: user.workExperience_2,
    workExperience_3: user.workExperience_3,
    german: user.german,
    english: user.english,
    chinese: user.chinese,
    licence: user.licence,
    relocation: user.relocation,
    selfIntroduction: user.selfIntroduction,
    german_certificate: user.german_certificate,
    english_certificate: user.english_certificate,
    chinese_certificate: user.chinese_certificate,
    gender: user.gender,
    region: user.region && user.region.value,
    subject: user.subject && user.subject.value,
    photolink: user.photolink,
    resume_open: user.resume_open,
  };

  console.log("userdata:", userdata);
  return async dispatch => {
    axios
      .post(`${APIServer}/api/personaluser`, userdata, {
        headers: {
          Authorization: token
        }
      })
      .then(() => {
        dispatch(UpdatePersonalUserDataAsync(userdata, disableForm));
      })
      .catch(err => console.log(err));
  };
}

export function UploadProfilePhoto(values, file) {

  let token = localStorage.getItem("Authorization");
  console.log("UploadProfilePhoto", values);
  let user = values;
  let userdata = {
    username: user.username,
    email: user.email,
    name: user.name,
    phone: user.phone,
    city: user.city,
    occupation: user.occupation,
    livingYearInGermany: user.livingYearInGermany,
    school: user.school,
    workExperience_1: user.workExperience_1,
    workExperience_2: user.workExperience_2,
    workExperience_3: user.workExperience_3,
    german: user.german,
    english: user.english,
    chinese: user.chinese,
    licence: user.licence,
    relocation: user.relocation,
    selfIntroduction: user.selfIntroduction,
    german_certificate: user.german_certificate,
    english_certificate: user.english_certificate,
    chinese_certificate: user.chinese_certificate,
    gender: user.gender,
    region: user.region && user.region.value,
    subject: user.subject && user.subject.value,
    photolink: user.photolink,
    resume_open: user.resume_open,
  };


  console.log("userdata:", userdata);


  return async dispatch => {

    try {
      const uploadConfig = await axios.get(`${APIServer}/api/personaluser/upload`, {
        headers: {
          Authorization: token
        }
      });

      console.log(uploadConfig);
      await axios.put(uploadConfig.data.url, file, {
        headers: {
          'Content-Type': file.type
        }
      })
      userdata.photolink = uploadConfig.data.key
      const res = await axios.post(`${APIServer}/api/personaluser`, userdata, {
        headers: {
          Authorization: token
        }
      })

      console.log(res)
      if (res) {
        dispatch(UpdatePersonalUserDataAsync(userdata));
      }

    } catch (error) {
      console.log(error);
    }
  };
}