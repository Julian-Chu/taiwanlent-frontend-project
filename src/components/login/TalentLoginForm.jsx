import React from 'react';


const TalentLoginForm = props => {
  return (
    <div>
      <h3>人才登入</h3>
      <button className="loginBtn loginBtn--facebook">
        Login with Facebook
      </button>
      <button className="loginBtn loginBtn--google">
        Login with Google
      </button>
    </div>
  )
}

export default TalentLoginForm;