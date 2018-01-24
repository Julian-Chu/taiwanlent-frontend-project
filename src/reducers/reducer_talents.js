import mockTalents from '../mockdata/mockTalents';
import axios from 'axios';
import {GET_Talents} from '../actions/get_talents';

export default function(state=[], action){
  console.log('GET_Talents', action);
  switch(action.type){
    case GET_Talents:
      return action.payload;

    default:
      return state
  }
  // return mockTalents ;
 
  // axios.get('http://localhost:4000/users')
  // .then(function (response) {
  //   console.log(response.data);
  //   state = response.data;
  // })
  // return state; 
}