import React from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const NavigationApproaches = () => {
  //first way object based approach
  // const nav = useNavigate();

  return (
    <>
      Navigation
      {/* <button type="button" onClick={() => nav('/home')}></button> */}
      <Link to="/home">navigate to home </Link>
      <NavLink to="/home" end={true} className={(isActive) => true} style={(isActive) => true}>navlink to home </NavLink>
    </>
  )
}