import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/NavBar';
import useTheme from './hooks/useTheme';
import About from './pages/About';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import ThemeSwitchProvider from './providers/ThemeSwitchProvider';

function App() {
  const [theme, setTheme] = useTheme('theme-blue');
  return (
    <ThemeSwitchProvider value={{ theme, setTheme }}>
      <div>
        <div className={`${theme} flex flex-col dark:bg-slate-600`}>
          <Navbar setTheme={setTheme} />
          <div className="h-screen py-12 dark:bg-slate-600 md:py-14">
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
        </div>
      </div>
    </ThemeSwitchProvider>
  );
}

export default App;
