import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import Home from '../../../components/home/Home';
import Slides from '../../../components/home/SlidesComponent';

describe('Home Tests', ()=>{
  const mockFunction1 = jest.fn();
  const mockFunction2 = jest.fn();
  const home = shallow(
    <Home 
    subscribeTransparentEvent={()=>mockFunction1}
    unsubscribeTransparentEvent={()=>mockFunction2}
    />
  );
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