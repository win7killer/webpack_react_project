import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import adaptive from 'adaptive.js';
import './index.less';

adaptive.scaleType = 3;
adaptive.desinWidth = 750;
adaptive.init();

ReactDom.render(<App/>, document.getElementById('root'));
