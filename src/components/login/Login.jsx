import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/loginButton.css';
import LoginForm from './LoginForm';
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
              <LoginForm />
            </div>
          </div>

          <div className="col_half col_last nobottommargin">
            <div className="well well-lg nobottommargin">
              <TalentLoginForm></TalentLoginForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}