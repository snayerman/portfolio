// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './App.jsx';
import configureStore from './store/configureStore';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();

render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>,
  document.getElementById('react-root')
);
