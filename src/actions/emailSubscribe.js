import axios from 'axios';

export function addEmailToNewletterList(values, callback){
  // todo: wait for backend
  const request = axios.post(`/api/subscriptions`, values)
                  .then(()=>callback());

  console.log('request',request);
}