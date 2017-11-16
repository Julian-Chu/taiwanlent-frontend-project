import React, { Component } from 'react';
import _ from 'lodash';

export default class SectionContact extends Component {
    constructor() {
        super();
        this.state = {
            username:"",
            email: "",
            phone: "",
            subject:"",
            message:""
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

        console.log(_.debounce);
        this.onUsernameChangeEvent = this.onUsernameChangeEvent.bind(this);
        this.onEmailChangeEvent = this.onEmailChangeEvent.bind(this);
        this.onPhoneChangeEvent = this.onPhoneChangeEvent.bind(this);

        this.doValidateEmail = _.debounce(this.doValidateEmail, 300);
        this.doValidatePhone = _.debounce(this.doValidatePhone, 300);
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validateTelephone(phone) {
        var re = /^\+\d{1,3}-\d{8,13}/;
        return re.test(phone)
    }

    onUsernameChangeEvent(e){
        let name = e.target.value;
        console.log(name);
        this.setState({username:name});
    }

    onEmailChangeEvent(e) {
        let email = e.target.value;
        this.setState({ email });
        this.doValidateEmail(email);
    }

    doValidateEmail(email) {
        if (email != '') {
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

    doValidatePhone(phone){        
            if (phone != '')
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

    onSubjectChangeEvent(e){
        let subject = e.target.value;
        this.setState({ subject});
    }

    onMessageChangeEvent(e){
        let message = e.target.value;
        this.setState({message});
    }

    render() {
        return (
            <div id="section-contact" className="page-section">
                <h2 className="center uppercase t300 ls3 font-body">聯絡我們</h2>
                <div className="container clearfix">
                    <div className="divcenter topmargin" style={{ maxWidth: '850px' }}>
                        <div className="contact-widget">
                            <div className="contact-form-result"></div>
                            <form className="nobottommargin" id="template-contactform" name="template-contactform"  action="include/sendemail.php" method="post">
                                <div className="form-process"></div>
                                <div className="col_half">
                                    <input type="text" id="template-contactform-name" name="template-contactform-name"  className="sm-form-control border-form-control required" placeholder="Name"   value={this.state.username} onChange={this.onUsernameChangeEvent} maxLength="14"/>
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
                                    <button className="button button-border button-circle t500 noleftmargin topmargin-sm" type="submit" id="template-contactform-submit" name="template-contactform-submit" value="submit">Send Message</button>
                                    <br />
                                    <small style={{ display: 'block', fontSize: '13px', marginTop: '15px' }}>We'll do our best to get back to you within 6-8 working hours.</small>
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