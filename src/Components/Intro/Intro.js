import React from 'react';
import classes from './Intro.module.css';

export default function Intro() {
  return (
    <div className={classes['intro-div']}>
      <h1>Delicious Food, Delivered To You</h1>
      <br />
      <p>
        Choose your favorite meals from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <br />
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
}
