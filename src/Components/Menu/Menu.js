import React from 'react';
import classes from './Menu.module.css';

export default function Menu(props) {
  return (
    <div className={classes.menu}>
      <form>
        <ul>
          <li className={classes.item}>
            <div>
              <h3> Sushi</h3>
              <p className={classes.description}>Finest fish and veggies</p>
              <p className={classes.price}>$22.99</p>
            </div>
            <div className={classes['right-bloc']}>
              <label htmlFor="amount">Amount</label>
              <input id="amount" type="text" placeholder="1" />
              <button type="submit"> + Add </button>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
}
