import axios from 'axios';
import APIServerLocation from '../APIServerLocation';

export const Post_ContactUs = 'Post_ContactUs';

export default function post(values){
  console.log("post_ContactUs in Action Creator")
  const request = axios.post(`/api/contactus`, values)
                  .then(()=>callback());

  return{
    type: Post_ContactUs,
    payload: request
  };
}