import React from 'react';
import {Link} from 'react-router-dom';
 

class Menu extends React.Component{
    render(){
        return(
            <ul className="list-group">
  <li className="list-group-item active bg-danger text-white">Menu</li>
  <li className="list-group-item"><Link to="/app">
  Trending</Link></li>
  <li className="list-group-item"><Link to="/app/search">search</Link></li>
  <li className="list-group-item"><Link to="/app/profile">Profile</Link></li>
  
</ul>
        );
    }
}

export {Menu};
