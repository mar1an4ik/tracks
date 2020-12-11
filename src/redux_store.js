import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import TracksReducer from "./Components/TracksReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    trackTree: TracksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


export default store;