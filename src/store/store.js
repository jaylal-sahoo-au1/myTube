import {createStore,combineReducers} from 'redux';
import {videoReducers} from './reducers/videoReducer';

let Reducers = combineReducers({
    videos:videoReducers
})

let store= createStore(Reducers);

export {store};