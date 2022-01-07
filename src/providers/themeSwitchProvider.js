import React from 'react';
import PropTypes from 'prop-types';

export const ThemeSwitchContext = React.createContext();

function ThemeSwitchProvider({ value, children }) {
  return (
    <ThemeSwitchContext.Provider value={value}>
      {children}
    </ThemeSwitchContext.Provider>
  );
}

ThemeSwitchProvider.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ThemeSwitchProvider;
