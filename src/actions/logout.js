import {
  LOGOUT
} from './types';

export function logout() {
  console.log('logout');
  localStorage.removeItem("Authorization")
  return {
    type: LOGOUT,
    payload: null
  }
}