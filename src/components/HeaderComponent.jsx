import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  scrollToSection(sectionId){
    let section = document.getElementById(sectionId);
    if(section !== null) section.scrollIntoView();
  }

  render() {
    return (
      <header id="header" className={`full-header transparent-header border-full-header static-sticky ${this.props.headerIsTransparent ? 'dark' : 'sticky-header'}`} data-sticky-class="not-dark" data-sticky-offset="full" data-sticky-offset-negative="100">
        <div id="header-wrap">
          <div className="container clearfix">
            <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>
            <div id="logo">
              <a href="index.html" className="standard-logo" data-dark-logo="%PUBLIC_URL%/images/taiwanlent-logo.png"><img src="images/taiwanlent-logo.png" alt="Taiwanlent Logo" /></a>
              <a href="index.html" className="retina-logo" data-dark-logo="%PUBLIC_URL%/images/taiwanlent-logo.png"><img src="images/taiwanlent-logo.png" alt="taiwanlent logo" /></a>
            </div>
            <nav id="primary-menu">
              <ul className="one-page-menu" data-easing="easeInOutExpo" data-speed="1250" data-offset="65">
                <li>
                  <Link to="/home" onClick={()=>this.scrollToSection("section-about")}>如何成為人才</Link>
                </li>
                <li>
                    <Link to="/talents" onClick={()=>this.scrollToSection("section-find")}>找人才</Link>
                </li>
                <li>
                    <Link to="/home" onClick={()=>this.scrollToSection("section-subscribe")}>訂閱電子報</Link>
                </li>
                <li>
                    <Link to="/home" onClick={()=>this.scrollToSection("section-contact")}>聯絡我們</Link>
                </li>
                <li>
                <Link to="/login" onClick={()=>this.scrollToSection("section-contact")}>登入</Link>
                </li>
              </ul>
              <div id="side-panel-trigger" className="side-panel-trigger" onClick={this.props.toggleSidePanelOpen}><i className="icon-reorder"></i></div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
