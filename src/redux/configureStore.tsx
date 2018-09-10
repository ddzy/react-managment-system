import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer/configureReducer';



const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
));



export default store as Store;