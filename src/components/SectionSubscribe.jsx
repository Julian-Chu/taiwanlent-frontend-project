import React, { Component } from 'react';
import EmailSubscribe from './EmailSubscribeComponent';
import CustomerComment from './CustomerComment';

export default class SectionSbuscribe extends Component{
    render(){
        return(
            <div id="section-subscribe" className="page-section notoppadding">
            <EmailSubscribe></EmailSubscribe>


            <div className="section dark nomargin">
                <div className="divcenter center" style={{ maxWidth: '900px' }}>
                    <h2 className="nobottommargin t300 ls1">成為德國在地的台德人才 ! <a href="./coming-soon-3.html" data-offset="140" data-easing="easeInOutExpo" data-speed="1250" className="button button-border button-circle button-light button-large notopmargin nobottommargin" style={{ position: 'relative', top: '-3px' }}>加入台灣瀾</a></h2>
                </div>
            </div>
            <CustomerComment></CustomerComment>

        </div>
        )
    }
}