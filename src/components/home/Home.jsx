import React, { Component } from 'react';
import Slides from './SlidesComponent';
import SectionAbout from './SectionAbout';
import SectionFind from './SectionFind';

import SectionSubscribe from './SectionSubscribe';
import SectionContact from './SectionContact';

export default class Home extends Component {
  constructor(props){
    super(props); 
    this.props.subscribeTransparentEvent();      
 }

 componentWillUnmount(){
   this.props.unsubscribeTransparentEvent();
 }

  render() {
    return (
      <div>
        <Slides ></Slides>
        <section id="content"  >
          <div className="content-wrap nopadding" style={{ backgroundColor: 'white' }}>
            <SectionAbout></SectionAbout>
            <SectionFind></SectionFind>
            <SectionSubscribe></SectionSubscribe>
            <SectionContact></SectionContact>
          </div>
        </section>
      </div>
    )
  }
}