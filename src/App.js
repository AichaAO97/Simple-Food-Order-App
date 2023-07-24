import React from 'react';
import Header from './Components/Header/Header';
import ContentArea from './Components/UI/ContentArea/ContentArea';
import Intro from './Components/Intro/Intro';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <React.Fragment>
      <Header />
      <ContentArea>
        <Intro />
        <Menu />
      </ContentArea>
    </React.Fragment>
  );
}

export default App;
