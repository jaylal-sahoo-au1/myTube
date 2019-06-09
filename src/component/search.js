import React from 'react';
import {Video} from './videos';
import {connect} from "react-redux";
import { stateMapper } from '../store/store';


class SearchComponent extends React.Component{
    constructor(props){
        super(props);

        this.state={
            query:""
        }
    this.inputChanged= this.inputChanged.bind(this);
    this.buttonChanged=this.buttonChanged.bind(this);
    }
    componentWillUnmount(){
        this.props.dispatch({
            type:"CLEAR_VIDEO",
            videoType:"trending"
        })
    }

    inputChanged(event){
    this.setState({
        query:event.target.value
    })
    }

    buttonChanged(){
        this.props.dispatch({
            type:"FETCH_VIDEOS",
            videoType:"search",
            query:this.state.query
        })
    }
    render(){
        return(
                <div>
                    <h2 className="text-danger">Search videos</h2>
                    <div className="form-row">
                      <div className="col">
                        <input type="text" onChange={this.inputChanged} className="form-control form-control-lg"/>
                      </div>
                      <button className="btn btn-danger" onClick={this.buttonChanged}><span className="oi oi-magnifying-glass"></span></button>
                    </div>
                    <div className="row">
                    <Video /></div>
                    
                </div>
            
            
            
        );
    }
}
let Search =connect(stateMapper)(SearchComponent);


export {Search};