import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe'
import Contact from './components/pages/Contact'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/about-me' exact component={ AboutMe } />
          <Route path='/contact' exact component= { Contact } />
          <Route path='/sign-up' exact component= { SignUp } />
        </Switch>
      </Router>
    </>
  );
}

export default App;
