import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import postsReducer from './reducers/postsReducer';
import commentsReducer from './reducers/commentsReducer';

let reducers = combineReducers({
  postsReducer: postsReducer,
  commentsReducer: commentsReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools())
}