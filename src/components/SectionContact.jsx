import React, { Component } from 'react';

export default class SectionContact extends Component{
    render(){
        return(
            <div id="section-contact" className="page-section">
            <h2 className="center uppercase t300 ls3 font-body">聯絡我們</h2>
            <div className="container clearfix">
                <div className="divcenter topmargin" style={{ maxWidth: '850px' }}>
                    <div className="contact-widget">
                        <div className="contact-form-result"></div>
                        <form className="nobottommargin" id="template-contactform" name="template-contactform" action="include/sendemail.php" method="post">
                            <div className="form-process"></div>
                            <div className="col_half">
                                <input type="text" id="template-contactform-name" name="template-contactform-name" value="" className="sm-form-control border-form-control required" placeholder="Name" />
                            </div>
                            <div className="col_half col_last">
                                <input type="email" id="template-contactform-email" name="template-contactform-email" value="" className="required email sm-form-control border-form-control" placeholder="Email Address" />
                            </div>

                            <div className="clear"></div>

                            <div className="col_one_third">
                                <input type="text" id="template-contactform-phone" name="template-contactform-phone" value="" className="sm-form-control border-form-control" placeholder="Phone" />
                            </div>

                            <div className="col_two_third col_last">
                                <input type="text" id="template-contactform-subject" name="template-contactform-subject" value="" className="required sm-form-control border-form-control" placeholder="Subject" />
                            </div>

                            <div className="clear"></div>

                            <div className="col_full">
                                <textarea className="required sm-form-control border-form-control" id="template-contactform-message" name="template-contactform-message" rows="7" cols="30" placeholder="Your Message"></textarea>
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