import {fetchSingleVideo} from '../api/youtube';
import {store} from '../store';
function currentPlayerVideoReducer(currentPlayerVideo={},action){
    if(action.type=="FETCH_VIDEO_DATA"){
        fetchSingleVideo(store,action);
    }
    if(action.type=="CLEAR_VIDEO_DATA"){
        return {};
    }

    if(action.type=="VIDEO_DATA_LOADED"){
        let newAction =action.videoData;
        newAction.snippet.shortDesc = action.videoData.snippet.description.slice(0,200);
        return newAction;
    }
    return currentPlayerVideo;

}

export {currentPlayerVideoReducer};