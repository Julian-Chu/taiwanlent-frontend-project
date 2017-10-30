import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props){
    super(props);    
  }

  render() {
    return (
      <header id="header" className="full-header transparent-header border-full-header dark static-sticky" data-sticky-class="not-dark" data-sticky-offset="full" data-sticky-offset-negative="100">
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
                  <a href="#section-about" data-href="#section-about">
                    <div>如何成為人才</div>
                  </a>
                </li>
                <li>
                  <a href="#section-find" data-href="#section-find">
                    <div>尋找人才</div>
                  </a>
                </li>
                <li>
                  <a href="#section-subscribe" data-href="#section-subscribe">
                    <div>訂閱電子報</div>
                  </a>
                </li>
                <li>
                  <a href="#section-contact" data-href="#section-contact">
                    <div>聯絡我們</div>
                  </a>
                </li>
                <li>
                  <a href="./coming-soon-3.html">
                    <div>登入</div>
                  </a>
                </li>
              </ul>
              <div id="side-panel-trigger" className="side-panel-trigger" onClick={this.props.toggleSidePanelOpen}><a href="#"><i className="icon-reorder"></i></a></div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
