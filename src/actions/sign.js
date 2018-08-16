import {
  CHANGE_AUTH,
  BUSINESS_USER,
  PERSONAL_USER
} from './types';


export function google_signin(token, role, history) {
  console('google_signin');
  localStorage.setItem("Authorization", `Bearer ${token}`);
  localStorage.setItem("Role", role);

  let userRole;
  if (role.toLowerCase() === "business") {
    userRole = BUSINESS_USER;
  } else if (role.toLowerCase() === "personal") {
    userRole = PERSONAL_USER
  } else {
    userRole = "Unknown"
  }

  history.push("/login");
  return {
    type: CHANGE_AUTH,
    payload: userRole
  }
}