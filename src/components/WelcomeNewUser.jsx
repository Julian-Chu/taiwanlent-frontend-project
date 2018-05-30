import React from 'react';
import require_auth from './require_authentication';
import { Link } from 'react-router-dom';

const WelcomeNewUser = () =>{
  return(
    <div>
      <h6>歡迎使用台灣瀾!</h6>
      <Link to="/talents">前往人才資料庫</Link>      
    </div>
  )
};

export default WelcomeNewUser;


