import React from 'react';
import ReactDOM from 'react-dom';
import ContextComponent from './ContextComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContextComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
