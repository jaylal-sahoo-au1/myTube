import React from 'react';
import {connect} from 'react-redux';

import {store, stateMapper} from '../store/store';


class VideoPlayerComponent extends React.Component{
    render(){
        return <p>Video Player</p>
    }
}

let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);

export {VideoPlayer};
