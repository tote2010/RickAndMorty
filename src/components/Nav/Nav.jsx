import React from 'react';
import { Link } from 'react-router-dom';
//import style from "./Nav.module.css";

export default function Nav(props){
    //console.log(props);
    return <div className='nav'>
    <Link to='/'> 
            <h4>Home</h4>
        </Link>
        <Link to='/band/create'>
            <h4>Create Band</h4>
        </Link>
        <Link>
            <h4>About</h4>
        </Link>
  </div>;
}