import React from "react";
import classes from './Steps.module.scss'

export const Steps = ({header, items}) => {

  return (
    <div className={classes.stepsWrapper}>
      <h3 className={classes.header}># {header}</h3>
      <ul>
        {items.map((item, key) => (
          <li key={key}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
};