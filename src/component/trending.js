import React from 'react';
import {Video} from './videos';
import {store, stateMapper} from '../store/store';
import {connect} from 'react-redux';

class TrendingComponent extends React.Component{
    componentDidMount(){
        this.props.dispatch({
            type:"FETCH_VIDEOS",
            videoType:"trending"
        })
    }
    componentWillUnmount(){
        this.props.dispatch({
            type:"CLEAR_VIDEO",
            videoType:"trending"
        })
    }
    render(){
        return(
                <div>
                    <h2 className="text-danger">Trending Videos</h2>
                    <hr></hr>
                    <div className="row">
                    <Video /></div>
                </div> 
        );
    }
}

let Trending = connect(stateMapper)(TrendingComponent);

export {Trending};