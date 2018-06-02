import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import regionOptions from '../../common/regions';
import renderSelect from './renderSelect';
import subjectOptions from '../../common/subjects';


const FirstPage = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>

      <Field
        name="email"
        placeholder=""
        className="col_half"
        title="Email"
        component={renderField}
      />

      <Field
        name="reemail"
        placeholder=""
        className="col_half col_last"
        title="再次確認Email"
        component={renderField}
      />
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
      <Field
        name="school"
        title="學校"
        placeholder=""
        className="col_half"
        component={renderField} />

      <Field
        name="subject"
        title="科系"
        placeholder="Select Subject"
        className="col_half col_last"
        options={subjectOptions}
        component={renderSelect}
        style={{ maxWidth: '250px' }} />

      <Field
        name="region"
        options={regionOptions}
        placeholder="Select region"
        className="col_half"
        title="所在邦聯"
        style={{ maxWidth: '300px' }}
        component={renderSelect}
      />

      <Field
        name="city"
        title="居住城市"
        placeholder=""
        className="col_half col_last"
        component={renderField} />
      <div className="clear"></div>
      <button type="submit" className="button button-border button-dark button-circle">Next</button>
    </form>
  )
}

export default reduxForm({
  validate,
  form: 'PersonalUserRegisterForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(FirstPage);