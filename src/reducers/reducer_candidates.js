import {AddCandidateToList} from '../actions/index';
import {RemoveCandidateFromList} from '../actions/index';
import {RemoveAllCandidates} from '../actions/index';



export default function(state=[], action){
    switch(action.type){
        case AddCandidateToList:
            let newState = [action.payload, ...state];
            console.log('Add Candidate', newState);
            return newState;
        case RemoveCandidateFromList:
            let temp = state.slice();
            temp.splice(temp.indexOf(action.payload),1);
            return temp;
        case RemoveAllCandidates:
            return [];
        default:
            return state;
    }
}