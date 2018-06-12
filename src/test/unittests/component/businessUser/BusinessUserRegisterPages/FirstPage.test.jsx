import { FirstPage } from '../../../../../components/businessUser/BusinessUserRegisterPages/FirstPage';
import React from 'react';
import { shallow } from 'enzyme';


describe('FirstPage in BusinessUserRegister', () => {
  const app = shallow(<FirstPage />)
  it('check snapshot', () => {
     expect(app).toMatchSnapshot();
  })
})
