import propTypes from 'prop-types';
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function NavLink({ children, to, className }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <button
      type="button"
      className={
        match ? `navbar-button border-b-2 border-primary_900` : 'navbar-button'
      }
    >
      <Link to={to} className={className}>
        {children}
      </Link>
    </button>
  );
}

NavLink.defaultProps = {
  className: '',
};

NavLink.propTypes = {
  children: propTypes.element.isRequired,
  to: propTypes.string.isRequired,
  className: propTypes.string,
};

export default NavLink;
