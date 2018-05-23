import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

describe('App', ()=>{
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  var app = shallow(<App/>);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}><App/></Provider>, div);
});

it('renders correctly',()=>{
  expect(app).toMatchSnapshot();
})

it('Class body-overlay exists',()=>{
  expect(app.find('.body-overlay').exists()).toBe(true);
})

it('SidePanel exists',()=>{
  expect(app.find('Connect(SidePanel)').exists()).toBe(true);
})

it('Header exists',()=>{
  expect(app.find('Connect(Header)').exists()).toBe(true);
})

it('Footer exists',()=>{
  expect(app.find('Footer').exists()).toBe(true);
})

});
