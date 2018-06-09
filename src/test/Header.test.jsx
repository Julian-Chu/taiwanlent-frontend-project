
import React from 'react';
import { shallow } from 'enzyme';
import {plainHeader} from '../components/Header';

describe('Header', ()=>{

  it('check snapshot',()=>{
    const app = shallow(<plainHeader></plainHeader>);
    expect(app).toMatchSnapshot();
  })
})