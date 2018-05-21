import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FirstPage from './BusinessUserRegister/FirstPage';
import SecondPage from './BusinessUserRegister/SecondPage';

class BusinessUserRegister extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.renderPageByNumber = this.renderPageByNumber.bind(this);
    this.state = {
      page: 1
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }
  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  renderPageByNumber(page) {
    switch (page) {
      case 1:
        return (
        <FirstPage onSubmit={this.nextPage}></FirstPage>          
      )
      case 2:
        return (
        <SecondPage onSubmit={this.nextPage} previousPage={this.previousPage}></SecondPage>
      )
      case 3:
        return <div>Page 3 </div>
    }
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        <h1>廠商註冊</h1>
        {this.renderPageByNumber(page)}
      </div>
    )
  }
}

export default BusinessUserRegister;