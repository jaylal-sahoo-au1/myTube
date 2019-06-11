import React from 'react';
import {connect} from 'react-redux';
import {stateMapper} from '../store/store';

class CommentsComponent extends React.Component{
    componentDidMount(){
        this.props.dispatch({
            type:"FETCH_VIDEO_COMMENT",
            videoId:this.props.videoId
        })
    }
    render(){
        return (
            this.props.currentVideoComment.map(c=>{
                return (<div key={c.id}>
                   <img src={c.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
                  <strong>{c.snippet.topLevelComment.snippet.authorDisplayName} says:</strong>
                   {c.snippet.topLevelComment.snippet.textDisplay}
                   <hr></hr>
                </div>
                    
                );
            })
        );
    }
}

let Comments = connect(stateMapper)(CommentsComponent);

export {Comments};
