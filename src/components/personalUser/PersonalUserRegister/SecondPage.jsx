
import React, { Component } from 'react';
import { Field, reduxForm, FieldArray, formValueSelector, change } from 'redux-form';
import validate from './validate';
import renderField from '../../renderComponents/renderField';
import regionOptions from '../../common/regions';
import subjectOptions from '../../common/subjects';
import renderSelect from '../../renderComponents/renderSelect';
import { connect } from 'react-redux';
import { fillUpUserData } from '../../../actions/personaluser';
import renderRadio from '../../renderComponents/renderRadio';

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

  onFormSubmit(values) {
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

        <div className="col_half">
          <Field
            placeholder="工作經驗1"
            name="workexperience_1"
            component={(field) => (<div>
              <label >工作經驗1:</label>
              <input
                type="text"
                className="form-control"
                placeholder="工作經驗1"
                {...field.input}

              />  </div>)}
          />
          <Field
            placeholder="工作經驗2"
            name="workexperience_2"
            component={(field) => (<div>
              <label >工作經驗:</label>
              <input
                type="text"
                className="form-control"
                placeholder="工作經驗2"
                {...field.input}

              />  </div>)}
          />
          <Field
            placeholder="工作經驗3"
            name="workexperience_3"
            component={(field) => (<div>
              <label >工作經驗3:</label>
              <input
                type="text"
                className="form-control"
                placeholder="工作經驗3"
                {...field.input}

              />  </div>)}
          />
        </div>

        <div className="col_half col_last">
          <Field
            name="german"
            type="checkbox"
            component="input"
            onClick={(event)=>{
              if(this.props.german){
                this.props.change('PersonalUserRegisterForm',"german_certificate",null);
              }
            }}
          />
          <label>German</label>
          <Field
            name="german_certificate"
            type="text"
            className="form-control"
            component="input"
            disabled={!this.props.german}
          />
          <Field
            name="english"
            type="checkbox"
            component="input"
            onClick={(event)=>{
              if(this.props.english){
                this.props.change('PersonalUserRegisterForm',"english_certificate",null);
              }}}
          />
          <label>English</label>
          <Field
            name="english_certificate"
            type="text"
            className="form-control"
            component="input"
            disabled={!this.props.english}
          />
          <Field
            name="chinese"
            type="checkbox"
            component="input"
            onClick={(event)=>{
              if(this.props.chinese){
                this.props.change('PersonalUserRegisterForm',"chinese_certificate",null);
              }}}
          />
          <label>Chinese</label>
          <Field
            name="chinese_certificate"
            type="text"
            className="form-control"
            component="input"
            disabled={!this.props.chinese}
          />
        </div>
        {/* <FieldArray
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
          )} /> */}

        <div className="col_half">
          <div><label>簡單自我介紹</label></div>
          <Field name="selfIntroduction" cols="40" rows="10" component="textarea"></Field>
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

const selector = formValueSelector('PersonalUserRegisterForm');
export default reduxForm({
  validate,
  form: 'PersonalUserRegisterForm',
  asyncBlurFields: [],
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(connect(state => {
  const german = selector(state, 'german');
  const english = selector(state, 'english');
  const chinese = selector(state, 'chinese');
  return {
    german,
    english,
    chinese
  }
}, { fillUpUserData, change })(SecondPage));