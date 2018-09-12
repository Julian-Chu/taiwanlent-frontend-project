import React from "react";

import { APIServer } from "../../globalsetting";

const TalentLoginForm = props => {
  return (
    <div>
      <h3>人才登入</h3>
      <button className="loginBtn loginBtn--facebook">
        Login with Facebook
      </button>
      <a href={`${APIServer}/auth/google/personal`}>
        <button className="loginBtn loginBtn--google">Login with Google</button>
      </a>
    </div>
  );
};

export default TalentLoginForm;
