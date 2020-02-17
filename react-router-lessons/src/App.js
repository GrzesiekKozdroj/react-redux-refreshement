import React from 'react';
import NavBar from './routes/navbar.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'//st allows routes, nd sets routes, rd makes sure only 1st route 
  //is selected
import Home from './routes/home'
import About from './routes/about'
import Contact from './routes/contact'
//import Rainbow from './hoc/rajnboł'
import Post from './routes/post'
import './index.css'

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/:post_id' component={Post} />
        </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;
