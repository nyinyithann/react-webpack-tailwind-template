import React from 'react';
import { Menu } from '@headlessui/react';
import { ColorSwatchIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

const ColorButton = ({ color, theme, setTheme }) => (
  <button
    type="button"
    aria-label="color"
    className="theme-btn"
    style={{ backgroundColor: color }}
    onClick={(_) => setTheme(theme)}
  />
);

ColorButton.propTypes = {
  color: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

const themeList = [
  { color: '#9CA3AF', theme: 'theme-gray' },
  { color: '#F87171', theme: 'theme-red' },
  { color: '#FBBF24', theme: 'theme-yellow' },
  { color: '#34D399', theme: 'theme-green' },
  { color: '#60A5FA', theme: 'theme-blue' },
  { color: '#818CF8', theme: 'theme-indigo' },
  { color: '#A78BFA', theme: 'theme-purple' },
  { color: '#F472B6', theme: 'theme-pink' },
];

const ThemeMenu = ({ setTheme }) => {
  const half = themeList.length / 2;
  let fstHalf = themeList.slice(0, half);
  const sndHalf = themeList.slice(half);
  fstHalf = sndHalf > fstHalf ? sndHalf : fstHalf;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="theme-menu-opener">
        <ColorSwatchIcon className="h-5 w-5 items-center text-primary_500" />
      </Menu.Button>
      <Menu.Items as="div" className="theme-menu-dropdown">
        <Menu.Item>
          <>
            <div className="flex flex-col z-10">
              <div className="theme-menu-internal-div">
                {fstHalf.map(({ color, theme }) => (
                  <ColorButton
                    key={color}
                    color={color}
                    theme={theme}
                    setTheme={setTheme}
                  />
                ))}
              </div>
              <div className="theme-menu-internal-div">
                {sndHalf.map(({ color, theme }) => (
                  <ColorButton
                    key={color}
                    color={color}
                    theme={theme}
                    setTheme={setTheme}
                  />
                ))}
              </div>
            </div>
          </>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

ThemeMenu.propTypes = {
  setTheme: PropTypes.func.isRequired,
};
export default ThemeMenu;
