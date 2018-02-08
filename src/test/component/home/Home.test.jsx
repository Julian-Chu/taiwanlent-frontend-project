import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Home from '../../../components/home/Home';
import Slides from '../../../components/home/SlidesComponent';

describe('Home Tests', ()=>{
  const home = shallow(
    <Home 
    subscribeTransparentEvent={()=>true}
    unsubscribeTransparentEvent={() => true}/>);
  it('Section exists',()=>{
    expect(home.find('section').exists()).toBe(true);
  });

  it('Slides exists',()=>{
    expect(home.find('Slides').exists()).toBe(true);
  });

  it('textarea not exist',()=>{
    expect(home.find('textarea').exists()).toBe(false);
  });

  it('div.content-wrap',()=>{
    expect(home.find('div.content-wrap').exists()).toBe(true);
  });
});