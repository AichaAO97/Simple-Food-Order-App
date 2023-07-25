import React, { useContext } from 'react';
import classes from './Cart.module.css';
import AuthContext from '../../../Store/Auth-context';

export default function Cart(props) {
  const ctx = useContext(AuthContext);
  const cartItems = ctx.cart.addedMeals;

  console.log('cartItems', cartItems);

  function orderHandler() {
    console.log('ordering..............');
  }

  function plusHandler(id, price) {
    ctx.incrementItem(id, price);
  }

  function minusHandler(id, price) {
    ctx.decrementItem(id, price);
  }

  return (
    <div className={classes['cart-container']}>
      <div className={classes.cart}>
        <ul>
          {cartItems.map((cartItem) => (
            <React.Fragment key={cartItem.id}>
              <li className={classes.cartItem}>
                <div>
                  <h3> {cartItem.mealName} </h3>
                  <p className={classes.price}>${cartItem.price}</p>
                  <span className={classes.amount}> x{cartItem.amount} </span>
                </div>
                <div className={classes['right-bloc']}>
                  <button
                    onClick={(event) => {
                      minusHandler(cartItem.id, cartItem.price);
                    }}
                  >
                    {' '}
                    &#45;{' '}
                  </button>
                  <button
                    onClick={(event) => {
                      plusHandler(cartItem.id, cartItem.price);
                    }}
                  >
                    {' '}
                    &#43;{' '}
                  </button>
                </div>
              </li>
              <hr className={classes.rule} />
            </React.Fragment>
          ))}
        </ul>
        <div>
          <div className={classes.total}>
            <span> Total Amount</span>
            <span> ${ctx.cart.totalPrice} </span>
          </div>
          <div className={classes.buttons}>
            <button
              className={classes.closeButton}
              onClick={props.changeVisibility}
            >
              Close
            </button>

            <button className={classes.orderButton} onClick={orderHandler}>
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
