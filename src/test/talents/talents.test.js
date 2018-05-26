
import React from 'react';
import {shallow} from 'enzyme';
import {Talents} from '../../components/talents/Talents';


describe("talents component",()=>{
  const app = shallow(<Talents talents={[]} candidates={[]}/>);
  it("contains filter component",()=>{
    expect(app.find('filter')).toBeTruthy();
  })
})