import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="dark noborder">
                <div className="container center">
                    <div className="footer-widgets-wrap">
                        <div className="row divcenter clearfix">
                            <div className="col-md-4">
                                <div className="widget clearfix">
                                    <h4>Site Links</h4>
                                    <ul className="list-unstyled footer-site-links nobottommargin">
                                        <li><a href="#" data-scrollto="#section-about" data-easing="easeInOutExpo" data-speed="1250" data-offset="70">如何成為人才</a></li>
                                        <li><a href="#" data-scrollto="#section-find" data-easing="easeInOutExpo" data-speed="1250" data-offset="70">人才資料庫</a></li>
                                        <li><a href="#" data-scrollto="#section-subscribe" data-easing="easeInOutExpo" data-speed="1250" data-offset="70">訂閱電子報</a></li>
                                        <li><a href="#" data-scrollto="#section-contact" data-easing="easeInOutExpo" data-speed="1250" data-offset="70">聯絡我們</a></li>
                                        <li><a href="#" data-scrollto="#section-login" data-easing="easeInOutExpo" data-speed="1250" data-offset="70">登入會員專區</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="widget clearfix">
                                    <h4>Contact</h4>
                                    <p className="lead">Taiwanlent</p>
                                    <div className="center topmargin-sm">
                                        <a href="#" className="social-icon inline-block noborder si-small si-facebook" title="Facebook">
                                            <i className="icon-facebook"></i>
                                            <i className="icon-facebook"></i>
                                        </a>
                                        <a href="#" className="social-icon inline-block noborder si-small si-twitter" title="Twitter">
                                            <i className="icon-twitter"></i>
                                            <i className="icon-twitter"></i>
                                        </a>
                                        <a href="#" className="social-icon inline-block noborder si-small si-github" title="Github">
                                            <i className="icon-github"></i>
                                            <i className="icon-github"></i>
                                        </a>
                                        <a href="#" className="social-icon inline-block noborder si-small si-pinterest" title="Pinterest">
                                            <i className="icon-pinterest"></i>
                                            <i className="icon-pinterest"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="copyrights">
                    <div className="container center clearfix">
                        Copyright Taiwanlent 2017 | All Rights Reserved
                        </div>
                </div>
            </footer>
        )
    }
}