import React from 'react';
import './App.scss';
import Header from "./header/header";
import Square from "./square";


function App() {
  return (
    <div>
      <Header/>
      <Square/>
      <div>Stuff that comes after the square</div>
    </div>
  );
}

export default App;
