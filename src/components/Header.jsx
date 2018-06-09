import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/logout';
import { HashLink} from 'react-router-hash-link';

const Header= props => {
  const scrollToSection = (sectionId) =>{
    let section = document.getElementById(sectionId);
    if(section !== null) section.scrollIntoView();
  };


    return (
      <header id="header" className={`full-header transparent-header border-full-header static-sticky ${props.headerIsTransparent ? 'dark' : 'sticky-header'}`}>
        <div id="header-wrap">
          <div className="container clearfix">
            <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>
            <div id="logo">
              <Link to="/home" className="standard-logo" data-dark-logo="%PUBLIC_URL%/images/taiwanlent-logo.png"><img src="/images/taiwanlent-logo.png" alt="Taiwanlent Logo" /></Link>
            </div>
            <nav id="primary-menu">
              <ul className="one-page-menu" data-easing="easeInOutExpo" data-speed="1250" data-offset="65">
                <li>
                  <HashLink to="/home#section-about" >如何成為人才</HashLink>
                </li>
                <li>
                    <Link to="/talents">找人才</Link>
                </li>
                <li>
                    <HashLink to="/home#section-subscribe">訂閱電子報</HashLink>
                </li>
                <li>
                    <HashLink to="/home#section-contact">聯絡我們</HashLink>
                </li>
                <li>
                {props.authenticated? <Link to="/logout">登出</Link>: <Link to="/login">登入</Link>}
                </li>
              </ul>
              <div id="side-panel-trigger" className="side-panel-trigger" onClick={props.toggleSidePanelOpen}><i className="icon-reorder"></i></div>
            </nav>
          </div>
        </div>
      </header>
    );
  };

  function mapStateToProps(state){
    return {
      authenticated:state.authenticated
    }
  }

  export const plainHeader = Header;

  export default connect(mapStateToProps,{logout})(Header);