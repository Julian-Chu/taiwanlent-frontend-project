
import React from 'react';
import { shallow } from 'enzyme';
import {plainHeader as Header} from '../components/Header';

describe('Header', ()=>{

  it('check snapshot',()=>{
    const app = shallow(<Header></Header>);
    expect(app).toMatchSnapshot();
  })

  it('has 5 link in li',()=>{
    const app = shallow(<Header></Header>)
    expect(app.find('li')).toHaveLength(5);
  })
  it('if authenticated is true, show logout',()=>{
    const app = shallow(<Header authenticated="true"></Header>)
    expect(app.find('.logout').exists()).toBeTruthy();
  })

  it('if authenticated is false, show signin',()=>{
    const app = shallow(<Header authenticated={false}></Header>)
    expect(app.find('.signin').exists()).toBeTruthy();
  })
})