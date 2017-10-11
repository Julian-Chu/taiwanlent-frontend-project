import React, {Component} from 'react';
import SlidesCss from '../sliders.css';

export default class Slides extends Component{
    constructor(props){
        super(props);
        this.state = { picHeight: 0 };
    }

    componentWillMount(){
        this.setState({picHeight: window.innerHeight+'px'});
        console.log(window.innerHeight);
        console.log(this.state.picHeight);
    }


  render(){
    return(
        <section  className="slider-parallax full-screen force-full-screen">
           <div className="slider-parallax-inner">
                    <div className="full-screen force-full-screen dark section nopadding nomargin noborder ohidden" style={{backgroundImage: "url('images/page/Taiwanlent-Berlin.jpg')", backgroundSize: 'cover', backgroundPosition: 'center center', height: this.state.picHeight}}>
                        <div className="container center">
                            <div className="vertical-middle">
                                <div className="emphasis-title">
                                    <h1>
                                        <span className="text-rotater nocolor" data-separator="|" data-rotate="fadeIn" data-speed="6000">
                <span className="t-rotate t700 font-body opm-small-word">最有效率的線上接案平台，在家上傳自介，輕鬆接案全世界 !|尋找你的翻譯人才，點三下滑鼠，發送你的工作邀約 !|找人才？台灣瀾。|台灣瀾，咱 • 台灣。</span>
                                        </span>
                                    </h1>
                                </div>
                                <a href="#" className="button button-border button-light button-circle" data-scrollto="#section-about" data-easing="easeInOutExpo" data-speed="1250" data-offset="70">成為人才</a>
                                <a href="#" className="button button-border button-light button-circle" data-scrollto="#section-find" data-easing="easeInOutExpo" data-speed="1250" data-offset="70">尋找人才</a></div>
                        </div>

                        <div className="video-wrap">
                            <div className="video-overlay" style={{backgroundColor: 'rgba(0,0,0,0.55)'}}></div>
                        </div>

                        <a href="#" data-scrollto="#section-about" data-easing="easeInOutExpo" data-speed="1250" data-offset="65" className="one-page-arrow dark"><i className="icon-angle-down infinite animated fadeInDown"></i></a>
                    </div>
                </div>
        </section>
    );
  }
}