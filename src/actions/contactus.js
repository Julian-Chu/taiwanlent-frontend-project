import axios from 'axios';
import {
  APIServer
} from '../globalsetting';

export const Post_ContactUs = 'Post_ContactUs';

export default function post(values, callback) {
  // todo: wait for backend
  console.log("post_ContactUs in Action Creator")
  const request = axios.post(`${APIServer}/api/contactus`, values)
    .then(() => callback());

  return {
    type: Post_ContactUs,
    payload: request
  };
}