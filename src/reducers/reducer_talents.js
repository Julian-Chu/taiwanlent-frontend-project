// import mockTalents from '../mockdata/mockTalents';
import {GET_Talents} from '../actions/get_talents';

export default function(state=[], action){
  switch(action.type){
    case GET_Talents:
      return action.payload;

    default:
      return state
  }
}