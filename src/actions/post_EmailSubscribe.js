import axios from 'axios';

export const Post_EmailSubscribe = 'Post_EmailSubscribe';

export default function post_EmailSubscribe(values, callback){
  const request = axios.post(`/api/subscriptions`, values)
                  .then(()=>callback());
  console.log('request',request);
  return{
    type: Post_EmailSubscribe,
    payload: request
  };
}