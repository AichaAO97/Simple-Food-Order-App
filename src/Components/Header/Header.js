import React from 'react';
import classes from './Header.module.css';
import { FaCartShopping } from 'react-icons/fa6';

export default function Header() {
  return (
    <header className={classes.header}>
      <h1> ReactMeals</h1>
      <button className={classes.button}>
        <FaCartShopping />
        <span className={classes.span}>
          Your Cart <span className={classes.number}>0</span>
        </span>
      </button>
    </header>
  );
}
