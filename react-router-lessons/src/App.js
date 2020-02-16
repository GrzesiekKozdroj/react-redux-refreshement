import React from 'react';
import NavBar from './routes/navbar.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './routes/home'
import About from './routes/about'
import Contact from './routes/contact'
import Rainbow from './hoc/rajnboł'

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
      </div>
    </BrowserRouter >
  );
}

export default App;
