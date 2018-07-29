import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DetailInfo from "./components/DetailInfo";
import { Router, Route, browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const store = createStore(reducer)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={App}> </Route>
                <Route path="/detail" component={DetailInfo}/>
            </Router>
        </div>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
