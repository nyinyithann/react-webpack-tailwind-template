import React, { useCallback } from 'react';
import { Menu } from '@headlessui/react';
import { ColorSwatchIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

function ColorButton({ color, theme, onClick }) {
  return (
    <button
      type="button"
      aria-label="color"
      className="theme-btn"
      data-theme={theme}
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
}

ColorButton.propTypes = {
  color: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const themeList = [
  [
    { color: '#94A3B8', theme: 'theme-slate' },
    { color: '#9CA3AF', theme: 'theme-gray' },
    { color: '#A1A1AA', theme: 'theme-zinc' },
    { color: '#A3A3A3', theme: 'theme-neutral' },
  ],
  [
    { color: '#A8A29E', theme: 'theme-stone' },
    { color: '#F87171', theme: 'theme-red' },
    { color: '#FB923C', theme: 'theme-orange' },
    { color: '#FBBF24', theme: 'theme-amber' },
  ],
  [
    { color: '#FACC15', theme: 'theme-yellow' },
    { color: '#A3E635', theme: 'theme-lime' },
    { color: '#4ADE80', theme: 'theme-green' },
    { color: '#34D399', theme: 'theme-emerald' },
  ],
  [
    { color: '#2DD4BF', theme: 'theme-teal' },
    { color: '#22D3EE', theme: 'theme-cyan' },
    { color: '#38BDF8', theme: 'theme-sky' },
    { color: '#60A5FA', theme: 'theme-blue' },
  ],
  [
    { color: '#818CF8', theme: 'theme-indigo' },
    { color: '#A78BFA', theme: 'theme-violet' },
    { color: '#C084FC', theme: 'theme-purple' },
    { color: '#E879F9', theme: 'theme-fuchsia' },
  ],
  [
    { color: '#F472B6', theme: 'theme-pink' },
    { color: '#FB7185', theme: 'theme-rose' },
    { color: '#000000', theme: 'dark' },
  ],
];

function ThemeMenu({ setTheme }) {
  const clickHandler = useCallback(
    (e) => {
      e.preventDefault();
      setTheme(e.target.getAttribute('data-theme'));
    },
    [setTheme]
  );

  return (
    <Menu as="div" className="relative flex items-center text-left">
      <Menu.Button className="flex flex-col items-center self-end justify-center flex-auto w-8 h-8 rounded-full bg-primary_transparent border-primary_transparent hover:bg-primary_400 active:bg-primary_400 active:text-primary_500 text-primary_600 focus:outline-none hover:text-primary_700 dark:bg-slate-900">
        <ColorSwatchIcon className="self-center w-5 h-5 text-primary_900 dark:text-white" />
      </Menu.Button>
      <Menu.Items
        as="div"
        className="theme-menu-dropdown dark:bg-slate-600 dark:border-slate-500"
      >
        <Menu.Item>
          <div className="z-10 flex flex-col">
            {themeList.map((x, i) => (
              /* eslint-disable react/no-array-index-key */
              <div key={`${x.theme}_${i}`} className="theme-menu-internal-div">
                {x.map(({ color, theme }) => (
                  <ColorButton
                    key={color}
                    color={color}
                    theme={theme}
                    onClick={clickHandler}
                  />
                ))}
              </div>
            ))}
          </div>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

ThemeMenu.propTypes = {
  setTheme: PropTypes.func.isRequired,
};

export default ThemeMenu;
