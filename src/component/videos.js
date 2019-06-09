import React from 'react';
import {store ,stateMapper} from '../store/store';
import {connect} from 'react-redux';


class VideoComponent extends React.Component{
    componentDidMount(){
        store.dispatch({
            type:"FETCH_VIDEOS",
            videoType:"trending"
        })
        
    }
    render(){
    
        return   this.props.videos.map(function(v){
            return (
                  <div key={v.id} className="col-md-4">
                  <a target="_blank" href={`https://www.youtube.com/watch?v=${v.id}`}>
                   <img className="img-fluid" src={v.snippet.thumbnails.high.url}/></a>

                   <p>{v.snippet.title} by <em>{v.snippet.channelTitle}</em></p>
                </div>
      )
        })
        
    }
}
let Video = connect(stateMapper)(VideoComponent);

export {Video};