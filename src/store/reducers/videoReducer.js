import {fetchVideo} from '../api/youtube';
import {store} from '../store';

function videoReducers(videos=[],action){
    if(action.type=="CLEAR_VIDEO"){
        return [];
    }

    if(action.type=="FETCH_VIDEOS"){
       fetchVideo(store,action.videoType,action.query);
    }
    if(action.type=="VIDEOS_LOADED"){
        videos = action.videos;
    }

    return videos;
}

export {videoReducers};