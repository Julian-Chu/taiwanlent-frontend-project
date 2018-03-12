import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import postEmailSubscribe from '../../actions/post_EmailSubscribe';
import  '../../styles/Home.css';
import checkRules from '../../regularExpression/checkRules';

class EmailSubscribe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      buttonDisabled: true
    };

    this.styles = {
      borderColor: '',
      warning: {
        display: 'none'
      }
    }
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const divClassName = `form-group ${touched && error ? 'alert-danger' : ''}`;
    const styles = touched && error ? { borderColor: 'red' } : {};
    const inputClassName = `form-control input-lg not-dark required email ${touched && error ? 'alert-danger' : ''} `;
    return (
      <div>
        <label >{field.label}</label>
        <input
          className={inputClassName}
          type="text"
          placeholder={field.placeholder}
          {...field.input} />
        <div className={`text-help ${divClassName}`}>
          {touched ? error : ''}
        </div>
      </div>
    )
  }



  onSubmit(values) {
    console.log(values);
    this.props.postEmailSubscribe(values, () => {
      console.log("post Email to Subscription");
    }
    )
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div  className="container clearfix">
        <div className="divcenter center" style={{ maxWidth: '900px' }}>
          <h2 className="nobottommargin t300 ls1">訂閱電子報</h2>
          <div className="widget-subscribe-form-result"></div>
          <form id="widget-subscribe-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label=""
              name="email"
              placeholder="Your Email Address"
              component={this.renderField}
            ></Field>
            <div className="widget subscribe-widget clearfix">

              <button className="button button-border button-circle topmargin-md "
                type="submit">訂閱</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Enter a Email";
  }
  else if (!checkRules.Email(values.email)) {
    errors.email = "Email is not valid!"
  }
  return errors;
}



export default reduxForm({
  validate,
  form: 'EmailSubscribeForm'
})(
  connect(null, { postEmailSubscribe })(EmailSubscribe)
  )
