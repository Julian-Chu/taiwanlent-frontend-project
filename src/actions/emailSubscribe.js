import axios from 'axios';

import {Post_EmailSubscribe} from './types';
export function post_EmailSubscribe(values, callback){
  // todo: wait for backend
  const request = axios.post(`/api/subscriptions`, values)
                  .then(()=>callback());

  console.log('request',request);
  return{
    type: Post_EmailSubscribe,
    payload: request
  };
}