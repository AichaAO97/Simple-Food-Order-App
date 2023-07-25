import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Menu from './Components/Menu/Menu';
import mealsImage from './images/meals.jpg';
import Cart from './Components/UI/Cart/Cart';
import classes from './App.module.css';

function App() {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCardVisibility = () => {
    setIsCardVisible((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      <Header changeVisibility={toggleCardVisibility} />
      <img src={mealsImage} alt="meals_image" className={classes.img}></img>

      <Intro />
      <Menu />

      {isCardVisible && <Cart changeVisibility={toggleCardVisibility} />}
    </React.Fragment>
  );
}

export default App;
