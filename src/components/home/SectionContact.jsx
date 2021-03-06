import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import checkRules from '../../regularExpression/checkRules';
import postContactUs from '../../actions/contactus';

class SectionContact extends Component {
    onSubmit(values){
        console.log(values);
        this.props.postContactUs(values);
    }

    renderField(field) {
        const { meta: { touched, error }, className } = field;
        const divClassName = `form-group ${touched && error ? 'alert-danger' : ''}`;
        const inputClassName = `sm-form-control border-form-control required ${touched && error ? 'alert-danger' : ''} `;
        return (
            <div className={className}>
                <input
                    className={inputClassName}
                    type={field.type || "text"}
                    placeholder={field.placeholder}
                    rows={field.rows||''}
                    cols={field.cols||''}
                    {...field.input} />
                <div className={`text-help ${divClassName}`}>
                    {touched ? error : ''}
                </div>
            </div>
        )
    }
    render() {
        const {handleSubmit, submitting} = this.props;
        return (
            <div id="section-contact" className="page-section">
                <h2 className="center uppercase t300 ls3 font-body">聯絡我們</h2>
                <div className="container clearfix">
                    <div className="divcenter topmargin" style={{ maxWidth: '850px' }}>
                        <div className="contact-widget">
                            <div className="contact-form-result"></div>
                            <form className="nobottommargin" id="template-contactform" name="template-contactform" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                <div className="form-process"></div>
                                <Field
                                    name="name"
                                    placeholder="Name"
                                    className="col_half"
                                    component={this.renderField} />

                                <Field
                                    name="email"
                                    placeholder="Email Address"
                                    className="col_half col_last"
                                    component={this.renderField}
                                    type="email"/>
                                <div className="clear"></div>
                                    
                                <Field
                                    name="phone"
                                    placeholder="Phone"
                                    className="col_one_third"
                                    component={this.renderField}/>
                                <Field
                                    name="subject"
                                    placeholder="Subject"
                                    className="col_two_third col_last"
                                    component={this.renderField}/>
                                <div className="clear"></div>
                                    
                                <Field
                                    name="message"
                                    placeholder="Your Message"
                                    className="col_ful"
                                    type="textarea"
                                    component={this.renderField}
                                    rows="7"
                                    cols="30"                                    
                                    />
                                <div className="clear"></div>
                                <div className="col_full center">
                                    <button className="button button-border button-circle t500 noleftmargin topmargin-sm" type="submit"  value="submit" disabled={submitting}>Send Message</button>
                                    <br />
                                    <small style={{ display: 'block', fontSize: '13px', marginTop: '15px' }}>We'll do our best to get back to you as soon as possbile.</small>
                                </div>
                                <div className="clear"></div>

                                <div className="col_full hidden">
                                    <input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" value="" className="sm-form-control" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};
    if(!checkRules.Email(values.email)) errors.email ="Invalid Email";
    if(!checkRules.Phone(values.phone)) errors.phone = "Format: +XX-XXXXXXXXXX";
    if(!values.name) errors.name = "Please fill you name";
    if(!values.email) errors.email = "Please fill you email";
    if(!values.phone) errors.phone = "Please fill you phone";
    if(!values.subject) errors.subject = "Subject is empty";
    if(!values.message) errors.message ="Message is empty";



    return errors;
}

export default reduxForm({
    validate,
    form: 'ContactForm'
})(
    connect(null, { postContactUs })(SectionContact)
    )
