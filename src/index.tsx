import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './designSystem/Layout';
import { Index } from './pages/Index';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Index />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
