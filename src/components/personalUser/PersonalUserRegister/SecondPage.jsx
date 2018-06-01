
import React, { Component } from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import regionOptions from '../../common/regions';
import renderSelect from './renderSelect';
import { connect } from 'react-redux';
import { fillUpUserData } from '../../../actions/personaluser';

class SecondPage extends Component {

  constructor(props){
    super(props);

  }
  render() {
    const { handleSumit, previousPage } = this.props;
    return (
      <form>
        <Field
          name="occupation"
          title="職業"
          placeholder=""
          className="col_half"
          component={renderField} />

        <Field
          name="livingYearsInGermany"
          title="在德居住年數"
          placeholder=""
          className="col_half col_last"
          component={this.renderField} />
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
          placeholder=""
          className="col_half col_last"
          options={this.subjectOptions}
          component={this.renderSelect}
          style={{ maxWidth: '250px' }} />

        <div className="clear"></div>
        <FieldArray
          name="workingExperiences"
          component={({ fields, meta: { error, submitFailed } }) => (
            <div className="col_half">         {
              fields.map((exp, index) => (
                <Field
                  key={index}
                  placeholder=""
                  name={exp}
                  component={(field) => (<div>
                    <label >{"工作經驗" + (index + 1)}:</label>
                    <input
                      type="text"
                      className="form-control"
                      {...field.input}

                    />  </div>)}
                />
              ))
            }
            </div>
          )} />

        <FieldArray
          name="languages"
          component={({ fields, meta: { error, submitFailed } }) => (
            <div className="col_half col_last">

              {fields.map((lang, index) => (
                <div key={index}>
                  <Field
                    name={`${lang}.canSpeak`}
                    type="checkbox"
                    component="input"
                    value={this.state.languagesIsChecked[index].isChecked}
                    onClick={() => {
                      if (!this.state.languagesIsChecked[index].isChecked) {
                        fields.getAll()[index].certificate = "";
                        this.setState(this.state.languagesIsChecked);
                      }
                    }}
                  />
                  <label>{fields.getAll()[index].display}</label>
                  <Field
                    name={`${lang}.certificate`}
                    type="text"
                    className="form-control"
                    component="input"
                    disabled={!fields.getAll()[index].canSpeak}

                  />
                </div>

              ))}
            </div>
          )} />

        <div className="col_half">
          <label htmlFor="register-form-languages">簡單自我介紹</label>
          <Field name="selfIntroduction" cols="40" rows="10" component="textarea"></Field>
        </div>
        <div id="gender">
          <label>性別</label>
          <div>
            <label><Field name="gender" component="input" type="radio" value="male"></Field>男</label>
            <label><Field name="gender" component="input" type="radio" value="female"></Field>女</label>
          </div>
        </div>

        <div className="col_half col_last">

          <br />
          <div>
            <Field type="checkbox" id="licence" name="licence" component="input"></Field>
            <label htmlFor="licence">駕照</label>
          </div>
          <div>
            <Field type="checkbox" id="relocation" name="relocation" component="input"></Field>
            <label htmlFor="relocation" >可搬家</label>
          </div>
        </div>
        <button type="button" onClick={previousPage} ></button>
      </form>
    )
  }
}

export default reduxForm({
  validate,
  form: 'PersonalUserRegisterForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(connect(null, { fillUpUserData })(SecondPage));