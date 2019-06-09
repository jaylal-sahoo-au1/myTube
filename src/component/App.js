import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {Menu} from './Menu';
import { Trending } from './trending';
import { Search } from './search';
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';
 
class App extends React.Component{
    render(){
        return <Provider store={store}>
            <Router><div className="container-fluid">
        <div className="row">
           <div className="col-md-3">
              <h3 className="text-danger">myTube</h3>
              <Menu />
              <hr></hr>
           </div>
           <div className="col-md-9">
           <Route path="/" exact={true} component={Trending}/>
           <Route path="/search" exact={true} component={Search}/>
    
           </div>
        </div>
      </div></Router>
            </Provider>
                   
               
    }
}

export {App};
