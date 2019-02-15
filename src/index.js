import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import TodoListReactApp from './components/TodoListReactApp.js';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import WebFont from 'webfontloader';
import configureStore from './redux/configureStore';

const store = configureStore();

WebFont.load({
    google: {
      families: ['Ubuntu:500,700', 'Open Sans']
    }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    console.log('SW registered: ', registration);
  }).catch((registrationError) => {
    console.log('SW registration failed: ', registrationError);
  });
}

store.subscribe( () => {
    const state = store.getState();
    const json = JSON.stringify(state.options);
    localStorage.setItem('options', json);
});

ReactDOM.render(
    <Provider store={store}>
        <TodoListReactApp  />
    </Provider>, 
    document.getElementById('app')
);


