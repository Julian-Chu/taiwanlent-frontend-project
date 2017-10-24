import React, { Component } from 'react';
import EmailSubscribe from './EmailSubscribeComponent';

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
            <div className="section parallax nomargin dark" style={{ backgroundImage: "url('images/page/testimonials.jpg')", padding: '150px 0' }} data-stellar-background-ratio="0.3">
                <div className="container clearfix">
                    <div className="col_two_fifth nobottommargin">&nbsp;</div>
                    <div className="col_three_fifth nobottommargin col_last">
                        <div className="fslider testimonial testimonial-full nobgcolor noborder noshadow nopadding" data-arrows="false">
                            <div className="flexslider">
                                <div className="slider-wrap">
                                    <div className="slide">
                                        <div className="testi-content">
                                            <p>InterPack展時, 雇用了Taiwanlent推薦的展場翻譯, 非常認真負責, 合作很愉快 ! </p>
                                            <div className="testi-meta">
                                                陳小姐
                                            <span>台北</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide">
                                        <div className="testi-content">
                                            <p>紐倫堡寵物展時, 請了一名專業翻譯, 使本司與客戶的會議非常成功, 非常推薦! </p>
                                            <div className="testi-meta">
                                                王先生
                                            <span>台中</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide">
                                        <div className="testi-content">
                                            <p>杜賽包裝展時請了一名翻譯來幫忙監工場佈, 廠商都很滿意 !</p>
                                            <div className="testi-meta">
                                                李先生
                                            <span>高雄</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}