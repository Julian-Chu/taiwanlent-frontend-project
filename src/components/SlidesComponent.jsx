import React, {Component} from 'react';
import styles from '../styles/sliders.css';
import TextRotator from './TextRotator';

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
        <section id="slider" className="slider-parallax full-screen force-full-screen" style={{height: this.state.picHeight, top:'-70px', marginBottom:'-70px'}}>
           <div className="slider-parallax-inner">
                    <div className="full-screen force-full-screen dark section nopadding nomargin noborder ohidden" style={{backgroundImage: "url('images/page/Taiwanlent-Berlin.jpg')", backgroundSize: 'cover', backgroundPosition: 'center center', height: this.state.picHeight}}>
                        <div className="container center">
                            <div className="vertical-middle" style={{position:'absolute', top:'50%', width:'100%', paddingTop:'0px', paddingBottom:'0px', marginTop:'-63.5px', opacity:'1.5'}}>
                                <div className="emphasis-title">
                                    <h1>
                                        <TextRotator dataSeparator="|">最有效率的線上接案平台，在家上傳自介，輕鬆接案全世界 !|尋找你的翻譯人才，點三下滑鼠，發送你的工作邀約 !|找人才？台灣瀾。|台灣瀾，咱 • 台灣。</TextRotator>
                                    </h1>
                                </div>
                                <a href="#section-about" className="button button-border button-light button-circle" data-scrollto="#section-about" data-easing="easeInOutExpo" data-speed="1250" data-offset="70">成為人才</a>
                                <button className="button button-border button-light button-circle" data-scrollto="#section-find" data-easing="easeInOutExpo" data-speed="1250" data-offset="70">尋找人才</button>
                                </div>
                        </div>

                        <div className="video-wrap">
                            <div className="video-overlay" style={{backgroundColor: 'rgba(0,0,0,0)'}}></div>
                        </div>

                        <a href="#" data-scrollto="#section-about" data-easing="easeInOutExpo" data-speed="1250" data-offset="65" className="one-page-arrow dark"><i className="icon-angle-down infinite animated fadeInDown"></i></a>
                    </div>
                </div>
        </section>
    );
  }
}