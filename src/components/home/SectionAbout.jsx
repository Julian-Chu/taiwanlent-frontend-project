import React, { Component } from 'react';

export default class SectionAbout extends Component {
  render() {
    return (
      <div id="section-about" className="center page-section" style={{ height: '100vh'}}>
        <div className="section nomargin">
          <div className="container clearfix">
            <h2 className="divcenter bottommargin font-body" style={{ maxWidth: '700px', fontSize: '40px' }}>如何加入Taiwanlent？</h2>
            <p className="lead divcenter bottommargin" style={{ maxWidth: '800px' }}>簡單三步驟，即可加入台灣瀾！</p>
            <p className="lead divcenter bottommargin" style={{ maxWidth: '800px' }}>「台灣瀾」是一商務服務大平台，使欲赴德語區從事交流的企業或個人得以尋找當地各行各業的台灣人才。除進行人才媒合，「台灣瀾」更提供第三方安全支付系統及人才能力認證等多項高品質與客制化服務，將成為您在德語區最有力的在地支援。</p>
            <p className="bottommargin" style={{ fontSize: '16px' }}><a href="./alternate-mobile-menu.html" data-scrollto="#section-services" data-easing="easeInOutExpo" data-speed="1250" data-offset="70" className="more-link">Learn more <i className="icon-angle-right"></i></a></p>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    )
  }
}