/* eslint-disable import/no-unresolved */
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, ErrorBoundary, FallbackLoading } from '@Components';
import { useTheme } from '@Hooks';
import { ThemeSwitchProvider } from '@Providers';

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const NotFound = lazy(() => import('./pages/notfound'));

function App() {
  const [theme, setTheme] = useTheme('theme-slate');
  return (
    <div className={`${theme} flex flex-col`}>
      <ThemeSwitchProvider value={setTheme}>
        <Navbar />
      </ThemeSwitchProvider>
      <div className="py-[56px] bg-white h-screen px-5 dark:bg-slate-500 dark:text-white">
        <ErrorBoundary>
          <Suspense fallback={<FallbackLoading />}>
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
