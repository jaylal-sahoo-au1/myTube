import React from 'react';
import {store ,stateMapper} from '../store/store';
import {connect} from 'react-redux';


class VideoComponent extends React.Component{
    render(){
        if(this.props.isVideoLoading){
         return (
             <div className="row">
                 <div className="col-md-12">
                 <div className="d-flex justify-content-center">
                  <div className="spinner-border text-danger" role="status">
                      <span class="sr-only">Loading...</span>
                 </div>
                 </div>
                 </div>
             </div>
         );
        }
        else {
        return   this.props.videos.map(function(v){
            let videoId =v.id;
            if(typeof videoId !="string"){
                videoId= v.id.videoId;
            }
            return (
                  <div key={v.etag} className="col-md-4">
                  <a target="_blank" href={`https://www.youtube.com/watch?v=${videoId}`}>
                   <img className="img-fluid" src={v.snippet.thumbnails.high.url}/></a>

                   <p>{v.snippet.title} by <em>{v.snippet.channelTitle}</em></p>
                </div>
      )
        })
        
    }
}
}
let Video = connect(stateMapper)(VideoComponent);

export {Video};