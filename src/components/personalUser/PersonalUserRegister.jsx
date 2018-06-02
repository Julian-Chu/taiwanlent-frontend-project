
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FirstPage from './PersonalUserRegister/FirstPage';
import SecondPage from './PersonalUserRegister/SecondPage';
import { reduxForm } from 'redux-form';

class PersonalUserRegister extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.renderPageBuNumber = this.renderPageBuNumber.bind(this);
    this.state = {
      page:1
    };

  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({page:this.state.page - 1});
  }

  renderPageBuNumber(page, onSubmit){
    switch(page){
      case 1:
        return(
          <FirstPage onSubmit={this.nextPage}></FirstPage>
        )
      case 2:
        return(
          <SecondPage onSubmit={onSubmit}></SecondPage>
        )
    }
  }

  render(){
    const {onSubmit} = this.props;
    const {page} = this.state;
    return(
      <div style={{margin: '5% 10% 5%'}}>
        {this.renderPageBuNumber(page,onSubmit)}
      </div>
    )
  }
}


export default reduxForm({
  form: 'PersonalUserRegisterForm'
})(PersonalUserRegister);