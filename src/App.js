import React from 'react';
import {Route} from 'react-router-dom';

import MainNav from './components/MainNav';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
      <SideNav />
      <div className="main-content">
      <MainNav />
      <Route exact path="/" component={Portfolio} />
      <Route path="/about" component={About} />
      </div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
