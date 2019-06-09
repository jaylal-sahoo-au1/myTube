import {createStore,combineReducers} from 'redux';
import {videoReducers} from './reducers/videoReducer';
import {isVideoLoadingReducer} from './reducers/isVideoLoadingReducer';

let Reducers = combineReducers({
    videos:videoReducers,
    isVideoLoading:isVideoLoadingReducer
})

let store= createStore(Reducers);

store.subscribe(function(){
    console.log(store.getState());
})

function stateMapper(state){
    return state;
}

export {store,stateMapper};