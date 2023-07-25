import React, { useState } from 'react';

const AuthContext = React.createContext({
  cart: {},
  updateCart: (id, mealName, price, amount) => {},
  incrementItem: () => {},
  decrementItem: () => {},
});

export const AuthContextProvider = (props) => {
  const [cart, setCart] = useState({
    numberOfMeals: 0,
    totalPrice: 0,
    addedMeals: [],
  });

  function incrementItem(id, price) {
    setCart((prevCart) => {
      let newAddedMeals = prevCart.addedMeals;

      const idxOfChangedMeal = newAddedMeals.findIndex(
        (meal) => +meal.id === +id
      );
      const updatedMeal = newAddedMeals[idxOfChangedMeal];
      updatedMeal.amount = updatedMeal.amount + 1;
      newAddedMeals[idxOfChangedMeal] = updatedMeal;
      return {
        numberOfMeals: +prevCart.numberOfMeals + 1,
        totalPrice: +prevCart.totalPrice + +price,
        addedMeals: newAddedMeals,
      };
    });
  }

  function decrementItem(id, price) {
    setCart((prevCart) => {
      let newAddedMeals = prevCart.addedMeals;

      const idxOfChangedMeal = newAddedMeals.findIndex(
        (meal) => +meal.id === +id
      );
      const updatedMeal = newAddedMeals[idxOfChangedMeal];
      updatedMeal.amount = updatedMeal.amount - 1;
      newAddedMeals[idxOfChangedMeal] = updatedMeal;
      return {
        numberOfMeals: +prevCart.numberOfMeals - 1,
        totalPrice: +prevCart.totalPrice - +price,
        addedMeals: newAddedMeals,
      };
    });
  }

  function updateCart(id, mealName, price, amount) {
    setCart((prevCart) => {
      const addedMeals = [...prevCart.addedMeals];

      let mealAlreadyInCart = false;
      let length = addedMeals.length;
      let i = 0;
      while (length !== 0 && !mealAlreadyInCart && i < length) {
        if (+addedMeals[i].id === +id) {
          addedMeals[i].amount = +addedMeals[i].amount + +amount;
          mealAlreadyInCart = true;
        } else {
          i += 1;
        }
      }

      if (!mealAlreadyInCart) {
        addedMeals.push({
          id: +id,
          mealName: mealName,
          price: +price,
          amount: +amount,
        });
      }

      return {
        numberOfMeals: +prevCart.numberOfMeals + +amount,
        totalPrice: +prevCart.totalPrice + +price * +amount,
        addedMeals: addedMeals,
      };
    });
  }

  return (
    <AuthContext.Provider
      value={{
        cart: cart,
        updateCart: updateCart,
        incrementItem: incrementItem,
        decrementItem: decrementItem,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
