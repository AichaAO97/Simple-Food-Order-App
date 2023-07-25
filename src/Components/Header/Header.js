import React, { useContext } from 'react';
import classes from './Header.module.css';
import { FaCartShopping } from 'react-icons/fa6';
import AuthContext from '../../Store/Auth-context';

export default function Header(props) {
  const ctx = useContext(AuthContext);
  return (
    <header className={classes.header}>
      <h1> ReactMeals</h1>
      <button onClick={props.changeVisibility} className={classes.button}>
        <FaCartShopping />
        <span className={classes.span}>
          Your Cart{' '}
          <span className={classes.number}>{ctx.cart.numberOfMeals}</span>
        </span>
      </button>
    </header>
  );
}
