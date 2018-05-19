import axios from 'axios';
import {GET_Talents} from './types';

export default function get(){
  return dispatch =>{
    axios.get(`api/users`)
        .then(res=>{
          console.log("Talents:", res.data);
          const talents = res.data.map(person=>{
            
            return person;
          });
          dispatch(getTalentsAsync(talents));
        }).catch(message=>console.log(message));
  }
}

function getTalentsAsync(talents){
  return{
    type: GET_Talents,
    payload:talents
  };
}