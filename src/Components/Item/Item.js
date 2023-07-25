import React, { useContext, useState } from 'react';
import classes from './Item.module.css';
import AuthContext from '../../Store/Auth-context';

export default function Item(props) {
  const ctx = useContext(AuthContext);
  let amount;

  function amountHandler(event) {
    amount = event.target.value;
  }

  function updateCartHandler() {
    console.log('id', props.item.id);
    ctx.updateCart(props.item.id, props.item.meal, props.item.price, +amount);
  }

  return (
    <React.Fragment>
      <li className={classes.item}>
        <div>
          <h3> {props.item.meal} </h3>
          <p className={classes.description}>{props.item.description}</p>
          <p className={classes.price}>${props.item.price}</p>
        </div>
        <div className={classes['right-bloc']}>
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            onChange={amountHandler}
            type="number"
            placeholder="0"
          />
          <button onClick={updateCartHandler} type="submit">
            {' '}
            + Add{' '}
          </button>
        </div>
      </li>
      <hr />
    </React.Fragment>
  );
}
