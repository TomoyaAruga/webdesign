import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header.jsx';
import Main from './component/Main.jsx';
import Main2 from './component/Main2.jsx';
import Plans from './component/Plans.jsx';
import Icons from './component/Icons.jsx';
import Footer from './component/Footer.jsx';


function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Main2 />
      <Plans />
      <Footer />
    </div>
  );
}

export default App;
