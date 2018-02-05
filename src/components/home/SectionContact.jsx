import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import checkRules from '../../regularExpression/checkRules';
import postContactUs from '../../actions/post_EmailSubscribe';

class SectionContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        };

        this.state = {
            email: "",
            phone: "",
            emailStyle: {
                borderColor: '',
                warning: {
                    display: 'none'
                }
            },
            phoneStyle: {
                borderColor: '',
                warning: {
                    display: 'none'
                }
            },
        };

        this.validateTelephone = this.validateTelephone.bind(this);
        this.validateEmail = this.validateEmail.bind(this);

        this.onUsernameChangeEvent = this.onUsernameChangeEvent.bind(this);
        this.onEmailChangeEvent = this.onEmailChangeEvent.bind(this);
        this.onPhoneChangeEvent = this.onPhoneChangeEvent.bind(this);

        this.doValidateEmail = _.debounce(this.doValidateEmail, 300);
        this.doValidatePhone = _.debounce(this.doValidatePhone, 300);
    }

    validateEmail(email) {
        var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validateTelephone(phone) {
        var re = /^\+\d{1,3}-\d{8,13}/;
        return re.test(phone)
    }

    onUsernameChangeEvent(e) {
        let name = e.target.value;
        this.setState({ username: name });
    }

    onEmailChangeEvent(e) {
        let email = e.target.value;
        this.setState({ email });
        this.doValidateEmail(email);
    }

    doValidateEmail(email) {
        if (email !== '') {
            this.setState({
                emailStyle: this.validateEmail(email) ?
                    {
                        borderColor: '',
                        warning: {
                            display: 'none'
                        }
                    } :
                    {
                        borderColor: 'red',
                        warning: {
                            display: 'none'
                        }
                    },
            })
        }
        else {
            this.setState({
                emailStyle: {
                    borderColor: '',
                    warning: {
                        display: 'none'
                    }
                }
            });
        }
    }

    onPhoneChangeEvent(e) {
        let phone = e.target.value;
        this.setState({ phone: phone });
        this.doValidatePhone(phone);

    }

    doValidatePhone(phone) {
        if (phone !== '')
            this.setState({
                phoneStyle: this.validateTelephone(phone) ?
                    {
                        borderColor: '',
                        warning: {
                            display: 'none'
                        }
                    } :
                    {
                        borderColor: 'red',
                        warning: {
                            display: 'none'
                        }
                    },
            })
        else this.setState({
            phoneStyle: {
                borderColor: '',
                warning: {
                    display: 'none'
                }
            }
        })

    }

    onSubjectChangeEvent(e) {
        let subject = e.target.value;
        this.setState({ subject });
    }

    onMessageChangeEvent(e) {
        let message = e.target.value;
        this.setState({ message });
    }

    onSubmit(values){
        console.log(values);
    }

    renderField(field) {
        const { meta: { touched, error }, className } = field;
        console.log(field);

        const divClassName = `form-group ${touched && error ? 'alert-danger' : ''}`;
        const styles = touched && error ? { borderColor: 'red' } : {};
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
                                
                                <div className="col_half">
                                    <input type="text" id="template-contactform-name" name="template-contactform-name" className="sm-form-control border-form-control required" placeholder="Name" value={this.state.username} onChange={this.onUsernameChangeEvent} maxLength="14" />
                                </div>
                                <div className="col_half col_last">
                                    <input type="email" id="template-contactform-email" style={this.state.emailStyle} name="template-contactform-email" value={this.state.email} onChange={this.onEmailChangeEvent} className="required email sm-form-control border-form-control" placeholder="Email Address" />
                                </div>

                                <div className="clear"></div>

                                <div className="col_one_third" >
                                    <input type="text" id="template-contactform-phone" style={this.state.phoneStyle} name="template-contactform-phone" maxLength="16" value={this.state.phone} onChange={this.onPhoneChangeEvent} className="sm-form-control border-form-control" placeholder="Phone" />
                                </div>

                                <div className="col_two_third col_last">
                                    <input type="text" id="template-contactform-subject" name="template-contactform-subject" value={this.state.subject} className="required sm-form-control border-form-control" placeholder="Subject" />
                                </div>

                                <div className="clear"></div>

                                <div className="col_full">
                                    <textarea className="required sm-form-control border-form-control" id="template-contactform-message" name="template-contactform-message" rows="7" cols="30" placeholder="Your Message" value={this.state.message}></textarea>
                                </div>

                                <div className="col_full center">
                                    <button className="button button-border button-circle t500 noleftmargin topmargin-sm" type="submit" id="template-contactform-submit" name="template-contactform-submit" value="submit" disabled={submitting}>Send Message</button>
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
    if(!values.name) errors.name = "Please fill you name";
    if(!values.email) errors.email = "Please fill you email";
    if(!values.phone) errors.phone = "Please fill you phone";
    if(!values.subject) errors.subject = "Subject is empty";
    if(!values.message) errors.message ="Message is empty";

    if(!checkRules.Email(values.email)) errors.email ="Invalid Email"

    return errors;
}

export default reduxForm({
    validate,
    form: 'ContactForm'
})(
    connect(null, { postContactUs })(SectionContact)
    )
