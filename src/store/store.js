import {createStore,combineReducers} from 'redux';
import {videoReducers} from './reducers/videoReducer';

let Reducers = combineReducers({
    videos:videoReducers
})

let store= createStore(Reducers);

store.subscribe(function(){
    console.log(store.getState());
})

function stateMapper(state){
    return state;
}

export {store,stateMapper};