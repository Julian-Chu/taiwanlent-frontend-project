import axios from 'axios';
import APIServerLocation from '../APIServerLocation';
import {GET_Talents} from './types';

export default function getTalents(){
  return dispatch =>{
    axios.get(`${APIServerLocation}/users`)
        .then(res=>{
          console.log("Talents:", res.data);
          const talents = res.data.map(person=>{
            
            return person;
          });
          dispatch(getTalentsAsync(talents));
        });
  }
}

function getTalentsAsync(talents){
  return{
    type: GET_Talents,
    payload:talents
  };
}