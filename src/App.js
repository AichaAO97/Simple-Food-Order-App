import React from 'react';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Menu from './Components/Menu/Menu';
import mealsImage from './images/meals.jpg';
import classes from './App.module.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <img src={mealsImage} alt="meals_image" className={classes.img}></img>

      <Intro />
      <Menu />
    </React.Fragment>
  );
}

export default App;
