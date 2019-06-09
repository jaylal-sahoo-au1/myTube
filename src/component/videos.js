import React from 'react';
import {store ,stateMapper} from '../store/store';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class VideoComponent extends React.Component{
    render(){
        if(this.props.isVideoLoading){
         return (
             <div className="row">
                 <div className="col-md-12">
                 <div className="d-flex justify-content-center">
                     <div className="spinner-border text-danger" role="status">
                      <span className="sr-only">Loading...</span>
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
                    <Link to="/player">
                    <a><img className="img-fluid" src={v.snippet.thumbnails.high.url}/></a>
                    </Link>
                   <p>{v.snippet.title} by <em>{v.snippet.channelTitle}</em></p>
                </div>
      )
        })
        
    }
}
}
let Video = connect(stateMapper)(VideoComponent);

export {Video};