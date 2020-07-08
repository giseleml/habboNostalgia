import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Block from './components/Block/Block'
import Form from './components/Form/Form'

const App = () => (
  <main>
    <Block />
    <Form />
  </main>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
