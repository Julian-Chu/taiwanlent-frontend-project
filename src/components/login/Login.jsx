import React, { Component } from 'react';
import '../../styles/loginButton.css';
import BusinessUserLoginForm from './BusinessUserLoginForm';
import TalentLoginForm from './TalentLoginForm';

export default class Login extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.setHeaderNontransparent();
  }

  render() {
    return (
      <div className="content-wrap">
        <div className="container clearfix">
          <div className="col_half nobottommargin">
            <div className="well well-lg nobottommargin">
              <BusinessUserLoginForm {...this.props}/>
            </div>
          </div>

          <div className="col_half col_last nobottommargin">
            <div className="well well-lg nobottommargin">
              <TalentLoginForm {...this.props}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}