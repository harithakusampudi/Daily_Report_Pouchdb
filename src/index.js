import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import Reducer from './modules';
import rootSaga from './sagas'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  Reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
