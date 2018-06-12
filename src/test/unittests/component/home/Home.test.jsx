import React from 'react';
import {shallow} from 'enzyme';
import Home from '../../../../components/home/Home';

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