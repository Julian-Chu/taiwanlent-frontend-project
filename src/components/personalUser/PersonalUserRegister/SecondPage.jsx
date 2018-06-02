
import React, { Component } from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import regionOptions from '../../common/regions';
import subjectOptions from '../../common/subjects';
import renderSelect from './renderSelect';
import { connect } from 'react-redux';
import { fillUpUserData } from '../../../actions/personaluser';
import renderRadio from './renderRadio';

class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      languagesIsChecked: [
        { language: 'german', isChecked: false },
        { language: 'english', isChecked: false },
        { language: 'chinese', isChecked: false }
      ]
    }
  }

  onFormSubmit(values){
    this.props.fillUpUserData(values, this.props.history);
  }

  render() {
  const { handleSubmit, previousPage, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onFormSubmit)}>
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
          component={renderField} />
        <div className="clear"></div>

        {/* <Field
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
          style={{ maxWidth: '250px' }} /> */}

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

              {this.state.languagesIsChecked.map((lang, index) => (
                <div key={index}>
                  <Field
                    name={`${lang.language}.canSpeak`}
                    type="checkbox"
                    component="input"
                    value={this.state.languagesIsChecked[index].isChecked}
                    onClick={() => {
                      if (!this.state.languagesIsChecked[index].isChecked) {
                        this.state.languagesIsChecked[index].certificate = "";
                        this.setState(this.state.languagesIsChecked);
                      }
                    }}
                  />
                  <label>{this.state.languagesIsChecked[index].language}</label>
                  <Field
                    name={`${lang}.certificate`}
                    type="text"
                    className="form-control"
                    component="input"
                    disabled={!this.state.languagesIsChecked[index].canSpeak}

                  />
                </div>

              ))}
            </div>
          )} />

        <div className="col_half">
          <div><label>簡單自我介紹</label></div>
          <Field name="selfIntroduction" cols="40" rows="10" component="textarea"></Field>
        </div>
        <div id="gender">
          <label>性別</label>
          <div>
            <Field
              name="gender"
              required={true}
              options={[
                { title: '男', value: 'male' },
                { title: '女', value: 'female' }
              ]}
              component={renderRadio}
            ></Field>
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
        <div className="clear"></div>
        <div className="col_half">
          <button type="button" onClick={previousPage} className="button button-border button-dark button-circle">Previous</button>
          <button type="submit" disabled={pristine || submitting} className="button button-border button-dark button-circle">Submit</button>
        </div>
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