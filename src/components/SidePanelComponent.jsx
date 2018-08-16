import React, { Component } from "react";
import { connect } from "react-redux";
import { BUSINESS_USER, PERSONAL_USER } from "../actions/types";

class SidePanel extends Component {
  renderByAuth() {
    switch (this.props.authenticated) {
      case BUSINESS_USER:
        return (
          <div>
            <a
              href="/businessuserprofile"
              className="button button-border button-light button-circle"
            >
              商務用戶資料
            </a>
            <a
              href="/logout"
              className="button button-border button-light button-circle"
            >
              登出
            </a>
          </div>
        );
      case PERSONAL_USER:
        return (
          <div>
            <a
              href="/personaluserprofile"
              className="button button-border button-light button-circle"
            >
              個人資料
            </a>
            <a
              href="/logout"
              className="button button-border button-light button-circle"
            >
              登出
            </a>
          </div>
        );
      default:
        return (
          <a
            href="./login"
            className="button button-border button-light button-circle"
            data-easing="easeInOutExpo"
            data-speed="1250"
            data-offset="70"
          >
            登入
          </a>
        );
    }
  }

  render() {
    return (
      <div id="side-panel" className="dark">
        <div id="side-panel-trigger-close" className="side-panel-trigger">
          <a href="">
            <i className="icon-line-cross" />
          </a>
        </div>
        <div className="side-panel-wrap">
          <div className="widget widget_links clearfix">
            <h4>會員專區</h4>
            <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
              <div className="clear topmargin-sm" />
              <abbr title="Login" /> <br />
            </div>
            {this.renderByAuth()}
          </div>

          <div className="widget quick-contact-widget clearfix">
            <h4>Connect Socially</h4>
            <a
              href=""
              className="social-icon si-small si-colored si-facebook"
              title="Facebook"
            >
              <i className="icon-facebook" />
              <i className="icon-facebook" />
            </a>
            <a
              href=""
              className="social-icon si-small si-colored si-twitter"
              title="Twitter"
            >
              <i className="icon-twitter" />
              <i className="icon-twitter" />
            </a>
            <a
              href=""
              className="social-icon si-small si-colored si-github"
              title="Github"
            >
              <i className="icon-github" />
              <i className="icon-github" />
            </a>
            <a
              href=""
              className="social-icon si-small si-colored si-pinterest"
              title="Pinterest"
            >
              <i className="icon-pinterest" />
              <i className="icon-pinterest" />
            </a>
            <a
              href=""
              className="social-icon si-small si-colored si-forrst"
              title="Forrst"
            >
              <i className="icon-forrst" />
              <i className="icon-forrst" />
            </a>
            <a
              href=""
              className="social-icon si-small si-colored si-linkedin"
              title="LinkedIn"
            >
              <i className="icon-linkedin" />
              <i className="icon-linkedin" />
            </a>
            <a
              href=""
              className="social-icon si-small si-colored si-gplus"
              title="Google Plus"
            >
              <i className="icon-gplus" />
              <i className="icon-gplus" />
            </a>
            <a
              href=""
              className="social-icon si-small si-colored si-instagram"
              title="Instagram"
            >
              <i className="icon-instagram" />
              <i className="icon-instagram" />
            </a>
            <a
              href=""
              className="social-icon si-small si-colored si-flickr"
              title="Flickr"
            >
              <i className="icon-flickr" />
              <i className="icon-flickr" />
            </a>
            <a
              href=""
              className="social-icon si-small si-colored si-skype"
              title="Skype"
            >
              <i className="icon-skype" />
              <i className="icon-skype" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToPros(state) {
  return {
    authenticated: state.authenticated
  };
}
export default connect(mapStateToPros)(SidePanel);
