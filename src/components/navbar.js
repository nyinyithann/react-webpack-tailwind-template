import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ThemeMenu from './thememenu';

const Navbar = ({ setTheme }) => (
  <nav className="bg-primary_100 py-1 fixed inset-x-0 flex-1 z-50">
    <div className="px-2">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="flex items-center text-primary_600">
            <button className="navbar-button" type="button">
              <Link className="navbar-menu-text" to="/">
                {' '}
                Home{' '}
              </Link>
            </button>
            <button className="navbar-button" type="button">
              <Link className="navbar-menu-text" to="About">
                {' '}
                About{' '}
              </Link>
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2 pr-4 relative">
          <ThemeMenu setTheme={setTheme} />
        </div>
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  setTheme: PropTypes.func.isRequired,
};
export default Navbar;
