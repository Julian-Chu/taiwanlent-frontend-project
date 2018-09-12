import axios from 'axios';
import {
  GET_Talents
} from './types';
import {
  APIServer
} from '../globalsetting';

export default function get() {
  let token = localStorage.getItem("Authorization");
  return dispatch => {
    axios.get(`${APIServer}/api/talents`, {
        headers: {
          Authorization: token
        }
      })
      .then(res => {
        console.log("Talents:", res.data);
        const talents = res.data.map(person => {

          return person;
        });
        dispatch(getTalentsAsync(talents));
      }).catch(message => console.log(message));
  }
}

function getTalentsAsync(talents) {
  return {
    type: GET_Talents,
    payload: talents
  };
}