import React, { Component } from 'react';

export default class CustomerComment extends Component {
  constructor(){
    super();
    this.state = {
      Comment:1
    }
  }

  render() {
    return (
      <div className="section parallax nomargin dark" style={{ backgroundImage: "url('images/page/testimonials.jpg')", padding: '150px 0' }} data-stellar-background-ratio="0.3">
        <div className="container clearfix">
          <div className="col_two_fifth nobottommargin">&nbsp;</div>
          <div className="col_three_fifth nobottommargin col_last">
            <div className="fslider testimonial testimonial-full nobgcolor noborder noshadow nopadding" data-arrows="false">
              <div className="flexslider">
                <div className="flex-viewpoint" style={{ overflow: 'hidden', position: 'relative', height: '139px' }}>
                  <div className="slider-wrap">
                    <div className={ this.state.Comment === 1? "slide flex-active-slider":"slide"}>
                      <div className="testi-content" >
                        <p>InterPack展時, 雇用了Taiwanlent推薦的展場翻譯, 非常認真負責, 合作很愉快 ! </p>
                        <div className="testi-meta">
                          陳小姐
                                  <span>台北</span>
                        </div>
                      </div>
                    </div>
                    <div className={ this.state.Comment === 2? "slide flex-active-slider":"slide"}>
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
                <ol className="flex-control-nav flex-control-paging">
                  <li>
                    <a href="" className="flex-active">1</a>
                  </li>
                  <li>
                    <a href="">2</a>
                  </li>
                  <li>
                    <a href="">3</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}