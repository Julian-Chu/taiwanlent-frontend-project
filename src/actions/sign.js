import {
  CHANGE_AUTH,
  BUSINESS_USER
} from './types';


export function google_signin(token, role, history) {
  localStorage.setItem("Authorization", `Bearer ${token}`);
  localStorage.setItem("Role", role);
  history.push("/login");
  return {
    type: CHANGE_AUTH,
    payload: BUSINESS_USER
  }
}