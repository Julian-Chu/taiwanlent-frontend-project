// import mockTalents from '../mockdata/mockTalents';
import {GET_Talents} from '../actions/types';

export default function(state=[], action){
  switch(action.type){
    case GET_Talents:
      return action.payload;

    default:
      return state
  }
}