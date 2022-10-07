import React from 'react';

import Logo from './Logo';
import NavLink from './NavLink';
import ThemeMenu from './ThemeMenu';

function Navbar() {
  return (
    <nav className="fixed inset-x-0 z-50 flex-1 bg-300 py-2 shadow shadow-200 dark:bg-slate-700">
      <div className="px-2">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="rounded-full px-1 pt-1 shadow-md shadow-700 dark:bg-slate-400">
              <Logo/>
            </div>
            <div className="hidden items-center md:flex">
              <span className="text-center font-brand text-lg text-900 drop-shadow-2xl dark:text-slate-400">
                Template
              </span>
            </div>
            <div className="flex items-center font-nav text-xl font-black md:text-lg">
              <NavLink className="navbar-menu-text" to="/">
                Home
              </NavLink>
              <NavLink className="navbar-menu-text" to="/About">
                About
              </NavLink>
            </div>
          </div>
          <div className="relative flex items-center space-x-2 pr-1">
            <ThemeMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
