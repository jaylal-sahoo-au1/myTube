import React from 'react';
import {connect} from 'react-redux';

import {store, stateMapper} from '../store/store';


class VideoPlayerComponent extends React.Component{
    constructor(props){
        super(props);

        this.renderData =this.renderData.bind(this);
    }
    componentDidMount(){
        this.props.dispatch({
            type:"FETCH_VIDEO_DATA",
            videoId:this.props.match.params.videoId
        })
    }
    componentWillUnmount(){
        this.props.dispatch({
            type:"CLEAR_VIDEO_DATA",
            videoType:"trending"
        })
    }
    renderData(){
        if(!this.props.currentPlayerVideo.snippet){
            return "Kindly wait....laoding";
        }
        else {
            return (this.props.currentPlayerVideo.snippet.title);
        }
    }
    
    render(){
        console.log(this.props.currentPlayerVideo.snippet);
        return (
            <div>
            <h2 className="text-danger">{this.renderData()}</h2>
            <hr></hr>
            <div className="row">
            <div className="col-md-1"></div>
               <div className="col-md-9">
               <div className="embed-responsive embed-responsive-4by3">
            <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.props.match.params.videoId}?rel=0`} allowFullScreen></iframe>
            </div>
               </div>
            </div>
            <div className="row">
            <div className="col-md-1"></div>
               <div className="col-md-11">
                 <h2>
                     Views:{this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.viewCount },
                     Likes:{this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.likeCount },
                     Dislikes:{this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.dislikeCount }
                 </h2>
               </div>
            </div>
            
            <div className="row">
            <div className="col-md-1"></div>
               <div className="col-md-9">
               {this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.snippet.description}
               </div>
            </div>
            </div>
        );
    }
}

let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);

export {VideoPlayer};
