import React from 'react';
import { Field, reduxForm} from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import { connect } from 'react-redux';

const FirstPage = props => {
  const {handleSubmit} = props;

  return(
    <div></div>
  )
}

export default reduxForm({
  validate,
  form: 'PersonalUserRegisterForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(FirstPage);