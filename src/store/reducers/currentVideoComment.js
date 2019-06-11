import {fetchCommentVideo} from '../api/youtube';
import {store} from '../store';
function currentVideoCommentReducers(currentVideoComment=[],action){
  if(action.type=="FETCH_VIDEO_COMMENT"){
      fetchCommentVideo(store,action);
  }
  if(action.type=="VIDEO_COMMENT_LOADED"){
      return action.comment;
  }
  return currentVideoComment;
}

export {currentVideoCommentReducers};