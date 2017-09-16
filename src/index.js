import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import EmailSubscribe from './components/EmailSubscribeComponent'

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<EmailSubscribe />, document.getElementById('email-subscribe'));

registerServiceWorker();
