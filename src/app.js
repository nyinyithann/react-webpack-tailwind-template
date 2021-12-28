import React from 'react';
import { Route, Routes } from 'react-router-dom';
import useLocalStorage from './hooks/UseLocalStorage';
import Navbar from './components/NavBar';
import About from './pages/about';
import Home from './pages/home';

function App() {
  const [theme, setTheme] = useLocalStorage(
    'react_tailwind_template_theme',
    'theme-slate'
  );
  return (
    <div className={`${theme} flex flex-col`}>
      <Navbar setTheme={setTheme} />
      <div className="py-[56px] bg-white h-screen px-5 dark:bg-slate-500 dark:text-white">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
