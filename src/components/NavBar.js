import React from 'react';
import { NavLink, ThemeMenu, Logo } from '@Components';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

function Navbar() {
  return (
    <nav className="fixed  inset-x-0 z-50 flex-1 py-1 shadow bg-300 shadow-200 dark:bg-slate-800 dark:text-white">
      <div className="px-2">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2 items-center justify-center">
            <div
              className="px-1 h-8 w-8 flex items-center justify-center
            rounded-full shadow-md shadow-400 dark:bg-slate-400"
            >
              {
                /* eslint-disable dot-notation */
                <Logo fill={fullConfig.theme.backgroundColor['600']} />
              }
            </div>
            <div className="items-center hidden md:flex">
              <span className="text-lg text-center font-brand text-900 drop-shadow-2xl dark:text-slate-400">
                React Template
              </span>
            </div>
            <div className="flex items-center text-lg font-black font-navigation">
              <NavLink className="py-1 px-3 rounded text-900" to="/">
                <span>Home</span>
              </NavLink>
              <NavLink className="py-1 px-3 rounded text-900" to="/About">
                <span>About</span>
              </NavLink>
            </div>
          </div>
          <div className="relative flex items-center pr-1 space-x-2">
            <ThemeMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
