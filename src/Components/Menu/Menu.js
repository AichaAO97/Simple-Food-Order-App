import React from 'react';
import classes from './Menu.module.css';

export default function Menu(props) {
  return (
    <div>
      <form>
        <ul>
          <li className={classes.item}>
            <div>
              <h3> Sushi</h3>
              <p>Finest fish and veggies</p>
              <p>$22.99</p>
            </div>
            <div>
              <h4>Amount</h4>
              <input type="text"></input>
              <button type="submit"> + add </button>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
}
