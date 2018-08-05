import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import reducer from './reducers';
import DetailInfo from './components/DetailInfo';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import Todo from './components/Todo';

// const store = createStore(reducer)
// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, applyMiddleware(thunk));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          {' '}
        </Route>
        <Route path="/login" component={App}>
          {' '}
        </Route>
        <Route path="/todo" component={Todo}>
          {' '}
        </Route>
        <Route path="/detail" component={DetailInfo} />
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
