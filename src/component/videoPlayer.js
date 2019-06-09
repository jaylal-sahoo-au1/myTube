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
            <div className="embed-responsive embed-responsive-4by3">
            <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.props.match.params.videoId}?rel=0`} allowFullScreen></iframe>
            </div>
            </div>
        );
    }
}

let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);

export {VideoPlayer};
