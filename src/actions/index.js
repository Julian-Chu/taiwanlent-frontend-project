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

export const writeMessageToCandidates = () => {
  // todo: call api

  return {
    type: RemoveAllCandidates
  }
}

export function addEmailToNewsletterList(values, callback) {
  // todo: wait for backend
  const request = axios.post(`${APIServer}/api/subscriptions`, values)
    .then(() => callback());

  console.log('request', request);
}