import React from 'react';
import {Video} from './videos';

class Trending extends React.Component{
    render(){
        return(
                <div>
                    <h2>Trending Videos</h2>
                    <hr></hr>
                    <div className="row">
                    <Video /></div>
                    
                </div>
            
            
            
        );
    }
}

export {Trending};