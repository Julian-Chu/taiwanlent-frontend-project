import React from 'react';
import { shallow, mount} from 'enzyme';
import {BusinessUserRegister} from '../../components/businessUser/BusinessUserRegister';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../reducers';

describe('BusinessUserRegister',()=>{
  const store = createStore(reducers);
  const businessUserRegister = shallow(<BusinessUserRegister store={store}/>)

  it('check snapshot',()=>{
    expect(businessUserRegister).toMatchSnapshot();
  })
  it('initial state: page =1',()=>{
    expect(businessUserRegister.state().page).toEqual(1);
  })

  it('contains FirstPage initially',()=>{
    expect(businessUserRegister.find('Connect(FirstPage)').exists()).toBeTruthy();
  })


})