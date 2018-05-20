import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContextComponent from './ContextComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ContextComponent />, document.getElementById('root'));
registerServiceWorker();
