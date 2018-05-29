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

  renderPageByNumber(page, onSubmit) {
    switch (page) {
      case 1:
        return (
          <FirstPage onSubmit={this.nextPage}></FirstPage>
        )
      case 2:
        return (
          <SecondPage onSubmit={onSubmit} previousPage={this.previousPage}></SecondPage>
        )
    }
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div style={{margin: '5% 10% 5%'}}>
        <h1>廠商註冊</h1>
        {this.renderPageByNumber(page, onSubmit)}
        <ol className="nav">
          <li>
            <button  className='active' >1</button>
          </li>
          <li>
            <button  className={this.state.index >= 1 ? 'active' : ''} >2</button>
          </li>
        </ol><h6>{this.state.page}/2</h6>
      </div>
    )
  }
}

export default BusinessUserRegister;