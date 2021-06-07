import { createStore, applyMiddleware, compose, combineReducers  } from 'redux';
import thunk from 'redux-thunk';
import auth from '../reducers/auth'

const initialState = {};

const rootReducer = combineReducers({
	auth,
})

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	compose(applyMiddleware(...middleware),
		typeof window ==='object' &&
		typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
			window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	) );

export default store;