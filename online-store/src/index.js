import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Header from './view/header/main';
import Footer from './view/footer/main';
import Content from './view/content/main';

ReactDOM.render(
  <React.StrictMode>
      <Header />
      <Content />
      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
