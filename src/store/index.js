import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import postsReducer from './reducers/postsReducer';

let reducers = combineReducers({
  postsReducer: postsReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools())
}