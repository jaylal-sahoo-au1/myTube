import {fetchSingleVideo} from '../api/youtube';
import {store} from '../store';
function currentPlayerVideoReducer(currentPlayerVideo={},action){
    if(action.type=="FETCH_VIDEO_DATA"){
        fetchSingleVideo(store,action);
    }
    if(action.type=="VIDEO_DATA_LOADED"){
        return currentPlayerVideo=action.videoData;
    }
    return currentPlayerVideo;

}

export {currentPlayerVideoReducer};