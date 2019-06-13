import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {Menu} from './Menu';
import { Trending } from './trending';
import { Search } from './search';
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';
import {VideoPlayer} from './videoPlayer';
 
class App extends React.Component{
    render(){
        return <Provider store={store}>
            <div className="container-fluid">
        <div className="row">
           <div className="col-md-3">
              <h3 className="text-danger">myTube<span className="oi oi-play-circle"></span></h3>
              <Menu />
              <hr></hr>
           </div>
           <div className="col-md-9">
           <Route path="/app" exact={true} component={Trending}/>
           <Route path="/app/search" exact={true} component={Search}/>
           <Route path="/app/player/:videoId" exact={true} component={VideoPlayer}/>
    
           </div>
        </div>
      </div>
            </Provider>
                   
               
    }
}

export {App};
