import React from 'react';
import ReactDOM from 'react-dom';
import Ticker from './Ticker';

const data = [
  { id: 'a', text: 'Hello World!' },
  { id: 'b', text: 'Sweet component!' },
  { id: 'c', text: 'Foo bar' },
  { id: 'd', text: 'Longer text' },
];

const root = document.getElementById('root');

let idx = -1;
function render() {
  idx = (++idx) % data.length;
  ReactDOM.render(<Ticker item={data[idx]} />, root);
}

render();
setInterval(render, 2000);
