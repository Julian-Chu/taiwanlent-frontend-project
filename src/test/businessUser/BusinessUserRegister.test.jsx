import React from 'react';
import { shallow} from 'enzyme';
import { BusinessUserRegister } from '../../components/businessUser/BusinessUserRegister';

describe('BusinessUserRegister', () => {
  const businessUserRegister = shallow(
    <BusinessUserRegister />
  )

  it('check snapshot', () => {
    expect(businessUserRegister).toMatchSnapshot();
  })
  it('initial state: page =1', () => {
    expect(businessUserRegister.state().page).toEqual(1);
  })

  it('execute nextPage, page will be 2', () => {
    businessUserRegister.instance().nextPage();
    expect(businessUserRegister.state().page).toEqual(2);
  })

  it('execute previousPage, page will be 1', () => {
    businessUserRegister.instance().previousPage();
    expect(businessUserRegister.state().page).toEqual(1);
  })

})