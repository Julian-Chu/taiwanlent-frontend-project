import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow, mount} from 'enzyme';


describe('App', ()=>{
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
it('2+2=4',()=>{
expect(2+2).toBe(4);
});

it('check',()=>{
  const App = shallow(<App/>).dive();
  console.log(App);
})

});
