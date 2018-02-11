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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}><App/></Provider>, div);
});

const app = shallow(<App/>);
it('SidePanel exists',()=>{
  expect(app.find('SidePanel').exists()).toBe(true);
})

it('Header exists',()=>{
  expect(app.find('Header').exists()).toBe(true);
})

it('Footer exists',()=>{
  // expect(app.find('Footer').exists()).toBe(true);
  expect(app.find('Footer').exists()).toBe(true);
  
})

});
