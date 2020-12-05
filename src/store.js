import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { usersListReducer } from './reducers/usersReducer';

const reducer = combineReducers({
  usersList: usersListReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

