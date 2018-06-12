
import { SecondPage } from '../../../../../components/businessUser/BusinessUserRegisterPages/SecondPage';
import React from 'react';
import { shallow } from 'enzyme';


describe('SecondPage in BusinessUserRegister', () => {

  const props = {
    handleSubmit: fn=>fn, 
    previousPage: fn=>fn, 
    pristine: true, 
    submitting: false}
  const app = shallow(<SecondPage {...props}/>)
  it('check snapshot', () => {
     expect(app).toMatchSnapshot();
  })
})
