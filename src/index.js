import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redusers';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

//
// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];
//
// store.subscribe(() => {
//   list.innerHTML = '';
//   trackInput.value = '';
//   store.getState().forEach((track) => {
//     const li = document.createElement('li');
//     li.textContent = track;
//     list.appendChild(li);
//   });
// });
//
// addTrackBtn.addEventListener('click', () => {
//   const trackName = trackInput.value;
//   if (trackInput.value !== '') {
//     store.dispatch({ type: 'ADD_TRACK', payload: trackName });
//   }
// });
