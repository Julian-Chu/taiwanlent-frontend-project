import React from 'react';
// import require_auth from './require_authentication';
import { Link } from 'react-router-dom';
import '../styles/WelcomeNewUser.css';

const WelcomeNewUser = () =>{
  return(
    <div className="WelcomeNewUser">
      <h2>歡迎使用台灣瀾!</h2>
      <Link to="/talents">前往人才資料庫</Link>      
    </div>
  )
};

export default WelcomeNewUser;


