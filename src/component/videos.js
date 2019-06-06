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
        return (
        this.props.videos.map(function(v){
            return (
               <div key={v.id} className="media">
             <img src={v.snippet.thumbnails.high.url} className="mr-3" alt="..."/>
             <div className="media-body">
             <h5 className="mt-0">{v.snippet.title}</h5>
               {v.snippet.description}
        </div>
      </div>)
        })
        );
    }
}
let Video = connect(stateMapper)(VideoComponent);

export {Video};