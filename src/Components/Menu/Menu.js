import React from 'react';
import classes from './Menu.module.css';
import Item from '../Item/Item';

const Items = [
  {
    id: 1,
    meal: 'Sushi',
    price: 22.99,
    description: 'Finest fish and veggies',
  },
  {
    id: 2,
    meal: 'Schnitzel',
    price: 16.5,
    description: 'A german specialty!',
  },

  {
    id: 3,
    meal: 'Barbecue Burger',
    price: 12.99,
    description: 'American, raw, meaty',
  },
  {
    id: 4,
    meal: 'Green Bowl',
    price: 18.99,
    description: 'Healthy... and green..',
  },
];

export default function Menu(props) {
  const addItemToCart = (event) => {
    event.preventDefault();
    console.log("it's working");
  };

  return (
    <div className={classes.menu}>
      <form onSubmit={addItemToCart}>
        <ul>
          {Items.map((item) => (
            <Item key={item.id} item={item} />
          ))}

          {/* <Item />
          <Item />
          <Item />
          <Item />
          <Item /> */}
        </ul>
      </form>
    </div>
  );
}
