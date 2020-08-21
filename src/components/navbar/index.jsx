import React, { useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './index.less';



export const MainNavBar = withRouter(function MainNavBar(props) {

  useEffect(() => {
    console.log('MainNavBar props', props)

  }, [props]);

  return <div className="component-main_nav_bar">
    <NavLink to="/home" isActive={() => (1)} activeStyle={{
      color: '#f90'
    }}>home</NavLink>
    <NavLink to="/home/welcome">welcome</NavLink>
    <NavLink to="/post">post</NavLink>
    <NavLink to="/about">about</NavLink>
  </div>
});
