import React from 'react';


const TalentLoginForm = props => {
  return (
    <div>
      <h3>人才登入</h3>
      <div className="col_full"></div>
      <div className="col_full">
      <button className="loginBtn loginBtn--facebook">
          Login with Facebook
      </button>
      </div>
      <div className="col_full">
        <button className="loginBtn loginBtn--google">
          Login with Google
      </button>
      </div>
    </div>
  )
}

export default TalentLoginForm;