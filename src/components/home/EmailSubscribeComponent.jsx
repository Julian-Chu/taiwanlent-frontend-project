import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Field,reduxForm} from 'redux-form';
import postEmailSubscribe from '../../actions/post_EmailSubscribe';

class EmailSubscribe extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: '',
      buttonDisabled: true
    };

    this.styles = {
      borderColor: '',
      warning : {
        display:'none'
      }
    }    
  }

  renderField(field){
    const {meta:{touched, error}} = field;
    console.log(field);
    const className=`form=group ${touched&&error? 'has-danger':''}`;
    return(
      <div className={className}>
      <label >{field.label}</label>
      <input 
      className="form-control"
      type="text"
      placeholder={field.placeholder}
      {...field.input}/>
      <div className="text-help">  
      {touched ? error:''}        
      </div>
    </div>

    )
  }

  onInputChange(event){
      // console.log(event.target.value);
      // console.log(this.validateEmail(event.target.value));

      this.setState({term:event.target.value});
      this.styles.borderColor= this.validateEmail(event.target.value)? '':'red';
      this.styles.warning.display= this.validateEmail(event.target.value)? 'none':'';
      
      if(event.target.value.length === 0) {
        this.styles.borderColor ='';
        this.styles.warning.display = 'none';
      }      
  }

  validateEmail(email){
    var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  onSubmit(values){
      console.log(values);
      this.props.postEmailSubscribe(values,()=>{
        console.log("post Email to Subscription");
      }    
    )
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div id="section-subscribe"className="container clearfix">
          <div className="divcenter center" style={{maxWidth: '900px'}}>
              <h2 className="nobottommargin t300 ls1">訂閱電子報</h2>
              <div className="widget-subscribe-form-result"></div>
              <form id="widget-subscribe-form"  onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <Field
                    label=""
                    name="emailSubscribe"
                    placeholder="Your Email Address"
                    component = {this.renderField}
                  ></Field>
                  <input type="email" 
                         id="widget-subscribe-form-email" 
                         name="widget-subscribe-form-email" 
                         className="form-control input-lg not-dark required email" 
                         style={this.styles}
                         placeholder="Your Email Address" 
                         value={this.state.term}
                         onChange={(event)=> this.onInputChange(event)}
                         ></input>
                         <div className="alert alert-danger" role="alert" style={this.styles.warning} >
                            <span className="glyphicon glyphicon-remove"></span>
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span>
                            Enter a valid email address
                        </div>
                  <div className="widget subscribe-widget clearfix">
                  
                      <button className="button button-border button-circle topmargin-md " 
                              type="submit"
                              disabled={true} >
                              訂閱
                      </button>
                  </div>
              </form>
          </div>
      </div>
    );
  }
}

function validate(values){
  const errors = {};
  console.log('values:',values);
  if(!values.emailSubscribe){
    errors.emailSubscribe = "Enter a Email";
  }
  else if(!validateEmail(values.emailSubscribe)){
    errors.emailSubscribe = "Email is not valid!"
  }
  console.log('errors',errors);
  return errors;
}

function validateEmail(email){
  var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default reduxForm({
  validate,
  form: 'EmailSubscribeForm'
})(
  connect(null, {postEmailSubscribe})(EmailSubscribe)
)
