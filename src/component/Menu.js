import React from 'react';
import {Link} from 'react-router-dom';
 

class Menu extends React.Component{
    render(){
        return(
            <ul className="list-group">
  <li className="list-group-item active">Menu</li>
  <li className="list-group-item"><Link to="/">
  Trending</Link></li>
  <li className="list-group-item"><Link to="/search">search</Link></li>
  
</ul>
        );
    }
}

export {Menu};
