import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';

ReactDOM.render(
  <BrowserRouter>
    <VisibilitySensor>
      <App />
    </VisibilitySensor>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
