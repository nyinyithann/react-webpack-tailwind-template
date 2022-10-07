import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function NavLink({ children, to, className }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <button
      className={
        match ? `navbar-button bg-400/60 dark:bg-slate-500` : 'navbar-button'
      }
      type="button"
    >
      <Link to={to} className={className}>
        {children}
      </Link>
    </button>
  );
}

export default NavLink;
