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
        match
          ? `${className} bg-primary_900 text-white dark:bg-slate-500`
          : className
      }
    >
      <Link to={to}>{children}</Link>
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
