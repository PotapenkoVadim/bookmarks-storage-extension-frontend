import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../applications/main/App';

window.console.error = function () {
  void 1;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#main')
);
