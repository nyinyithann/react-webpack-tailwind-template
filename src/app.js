import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import useTheme from './hooks/useTheme';
import About from './pages/about';
import Home from './pages/home';
import NotFound from './pages/notfound';
import ThemeSwitchProvider from './providers/themeSwitchProvider';

function App() {
  const [theme, setTheme] = useTheme('theme-slate');
  return (
    <div className={`${theme} flex flex-col`}>
      <ThemeSwitchProvider value={setTheme}>
        <Navbar />
      </ThemeSwitchProvider>
      <div className="py-[56px] bg-white h-screen px-5 dark:bg-slate-500 dark:text-white">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
