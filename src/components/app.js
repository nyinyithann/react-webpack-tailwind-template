import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Navbar from './navbar';

function App() {
  const [theme, setTheme] = useState('theme-green');
  return (
    <div className={`${theme} flex flex-col`}>
      <Navbar setTheme={setTheme} />

      <div className="py-[56px] bg-primary_50 h-screen px-5">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
