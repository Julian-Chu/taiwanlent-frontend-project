import axios from 'axios';
import {
  APIServer
} from '../globalsetting';
export const FILTERS = 'FILTERS';
export const AddCandidateToList = 'AddCandidate';
export const RemoveCandidateFromList = 'RemoveCandidate';
export const RemoveAllCandidates = ' RemoveAllCandidates';

export const setFilters = (filters) => {
  return {
    type: FILTERS,
    payload: filters,
  };
};

export const addCandidate = (talentId) => {
  return {
    type: AddCandidateToList,
    payload: talentId,
  };
};

export const removeCandidate = (talentId) => {
  return {
    type: RemoveCandidateFromList,
    payload: talentId,
  };
};

export const removeAllCandidates = () => {
  return {
    type: RemoveAllCandidates,
  };
};

export const writeMessageToCandidates = (data, toggleMessageWin) => {
  let token = localStorage.getItem('Authorization');
  // todo: call api
  console.log(data);
  // var {
  //   businessUser,
  //   subject,
  //   message,
  //   candidates
  // } = data;

  return dispatch => {
    axios.post(`${APIServer}/api/talents/message`, data, {
      headers: {
        Authorization: token
      }
    }).then(() => {
      dispatch(writeMessageToCandidatesAsync(toggleMessageWin));
    }).catch(err => console.log(err));
  }

}

function writeMessageToCandidatesAsync(toggleMessageWin) {
  toggleMessageWin(false);
  return {
    type: RemoveAllCandidates
  }
}

export function addEmailToNewsletterList(values, callback) {
  // todo: wait for backend
  axios.post(`${APIServer}/api/subscriptions`, values)
    .then(() => callback());
}