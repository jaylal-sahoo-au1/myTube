import {createStore,combineReducers} from 'redux';
import {videoReducers} from './reducers/videoReducer';
import {isVideoLoadingReducer} from './reducers/isVideoLoadingReducer';
import { currentPlayerVideoReducer } from './reducers/singleVideo';

let Reducers = combineReducers({
    videos:videoReducers,
    isVideoLoading:isVideoLoadingReducer,
    currentPlayerVideo:currentPlayerVideoReducer
})

let store= createStore(Reducers);

store.subscribe(function(){
    console.log(store.getState());
})

function stateMapper(state){
    return state;
}

export {store,stateMapper};