import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './store/store';
import './index.css';
import { App } from './components/App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './components/shared/ErrorBoundary/ErrorBoundary';

// Intercept requests with MSW service worker when developing locally
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('./mocks/browser');

  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
