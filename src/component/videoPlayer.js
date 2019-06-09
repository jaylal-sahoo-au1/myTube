import React from 'react';
import {connect} from 'react-redux';

import {store, stateMapper} from '../store/store';


class VideoPlayerComponent extends React.Component{
    render(){
        return (
            <div>
            <h2 className="text-danger">Search videos</h2>
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
