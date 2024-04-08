import React from "react";
import classes from './PageLayout.module.scss';

export const PageLayout = ({children}) => {
  return (
    <div className={classes.pageLayoutContainer}> 
      {children}
    </div>
  )
} 