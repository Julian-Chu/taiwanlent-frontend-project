import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FirsPage from './BusinessUserRegister/FirstPage';

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
          // <div>Page1</div>
        <FirsPage onSubmit={this.nextPage}></FirsPage>          
      )
      case 2:
        return <div>Page2</div>
    }
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        <h1>Test

        </h1>
        {this.renderPageByNumber(page)}
      </div>
    )
  }
}

export default BusinessUserRegister;