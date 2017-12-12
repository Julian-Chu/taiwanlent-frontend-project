import {
    AddCandidateToList
} from '../actions/index';
import {
    RemoveCandidateFromList
} from '../actions/index';
import {
    RemoveAllCandidates
} from '../actions/index';



export default function (state = [], action) {
    let newState = state.slice();
    switch (action.type) {
        case AddCandidateToList:
            if (state.indexOf(action.payload) === -1) // check existing id in list
                newState = [action.payload, ...state];
            console.log('Add Candidate, new list:', newState);
            break;
        case RemoveCandidateFromList:
            newState = state.slice();
            newState.splice(newState.indexOf(action.payload), 1);
            console.log('Remove Candidate, new list:', newState);
            break;
        case RemoveAllCandidates:
            newState = [];
            break;
        default:
            break;
        }
        return newState;
}