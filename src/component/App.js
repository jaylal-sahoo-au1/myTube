import React from 'react';
import { Video } from './videos';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {stateMapper} from '../store/store';
 
class App extends React.Component{
    render(){
        return <Provider store={store}>
            <div className="container-fluid">
        <div className="row">
           <div className="col-md-8 offset-md-2">
              <h1>myTube-Trending videos</h1>
              <hr></hr>
              <Video />
           </div>
        </div>
      </div></Provider>
                   
               
    }
}

export {App};
