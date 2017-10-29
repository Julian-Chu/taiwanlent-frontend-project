import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import EmailSubscribe from './components/EmailSubscribeComponent';
// import Slides from './components/SlidesComponent'


ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<EmailSubscribe />, document.getElementById('email-subscribe'));
// ReactDOM.render(<Slides/>, document.getElementById('slider'));
registerServiceWorker();
