import React, { Component } from 'react';

export default class SidePanel extends Component {
    render() {
        return (
            <div id="side-panel" className="dark">
                <div id="side-panel-trigger-close" className="side-panel-trigger"><a href=""><i className="icon-line-cross"></i></a></div>
                <div className="side-panel-wrap">
                    <div className="widget widget_links clearfix">
                        <h4>會員專區</h4>
                        <div style={{ fontSize: '14px', lineHeight: '1.7' }}>
                            <div className="clear topmargin-sm"></div>
                            <abbr title="Login"></abbr> <br></br>
                        </div>

                        <a href="./coming-soon-3.html" className="button button-border button-light button-circle" data-easing="easeInOutExpo" data-speed="1250" data-offset="70">登入</a>
                    </div>

                    <div className="widget quick-contact-widget clearfix">
                        <h4>Connect Socially</h4>
                        <a href="" className="social-icon si-small si-colored si-facebook" title="Facebook">
                            <i className="icon-facebook"></i>
                            <i className="icon-facebook"></i>
                        </a>
                        <a href="#" className="social-icon si-small si-colored si-twitter" title="Twitter">
                            <i className="icon-twitter"></i>
                            <i className="icon-twitter"></i>
                        </a>
                        <a href="#" className="social-icon si-small si-colored si-github" title="Github">
                            <i className="icon-github"></i>
                            <i className="icon-github"></i>
                        </a>
                        <a href="#" className="social-icon si-small si-colored si-pinterest" title="Pinterest">
                            <i className="icon-pinterest"></i>
                            <i className="icon-pinterest"></i>
                        </a>
                        <a href="#" className="social-icon si-small si-colored si-forrst" title="Forrst">
                            <i className="icon-forrst"></i>
                            <i className="icon-forrst"></i>
                        </a>
                        <a href="#" className="social-icon si-small si-colored si-linkedin" title="LinkedIn">
                            <i className="icon-linkedin"></i>
                            <i className="icon-linkedin"></i>
                        </a>
                        <a href="" className="social-icon si-small si-colored si-gplus" title="Google Plus">
                            <i className="icon-gplus"></i>
                            <i className="icon-gplus"></i>
                        </a>
                        <a href="" className="social-icon si-small si-colored si-instagram" title="Instagram">
                            <i className="icon-instagram"></i>
                            <i className="icon-instagram"></i>
                        </a>
                        <a href="" className="social-icon si-small si-colored si-flickr" title="Flickr">
                            <i className="icon-flickr"></i>
                            <i className="icon-flickr"></i>
                        </a>
                        <a href="" className="social-icon si-small si-colored si-skype" title="Skype">
                            <i className="icon-skype"></i>
                            <i className="icon-skype"></i>
                        </a>

                    </div>

                </div>

            </div>
        );
    }
}
