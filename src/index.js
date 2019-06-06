import {store} from './store/store';


store.subscribe(function(){
    console.log(store.getState());
})

store.dispatch({
    type:"FETCH_VIDEOS",
    videoType:"trending"
})