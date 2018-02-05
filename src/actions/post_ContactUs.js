import axios from 'axios';
import APIServerLocation from '../APIServerLocation';

export const Post_ContactUs = 'Post_ContactUs';

export default function post_ContactUs(values){
  console.log("post_ContactUs in Action Creator")
  const request = axios.post(`${APIServerLocation}/contactus`, values)
                  .then(()=>callback());

  return{
    type: Post_ContactUs,
    payload: request
  };
}