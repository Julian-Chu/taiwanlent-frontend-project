
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const SecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>

      <Field
        name="name"
        placeholder=""
        className="col_half"
        title="真實姓名"
        component={renderField}
      />
      <Field
        name="phone"
        placeholder=""
        className="col_half col_last"
        title="連絡電話"
        component={renderField}
      />
      <div className="clear"></div>
      <button type="button" onClick={previousPage}>Previous</button>
      <button type="submit">Next</button>
    </form>
  )
}
export default reduxForm({
  validate,
  form: 'BusinessUserRegisterForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,

})(SecondPage);