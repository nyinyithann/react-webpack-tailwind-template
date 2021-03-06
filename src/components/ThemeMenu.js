import {Menu} from '@headlessui/react';
import PropTypes from 'prop-types';
import React, {useCallback} from 'react';
import {ThemeSwitchContext} from '@Providers';

function ColorButton({color, theme, onClick}) {
    return (
        <button
            type="button"
            aria-label="color"
            className="theme-btn"
            data-theme={theme}
            style={{backgroundColor: color}}
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
        {color: '#94A3B8', theme: 'theme-slate'},
        {color: '#9CA3AF', theme: 'theme-gray'},
        {color: '#A1A1AA', theme: 'theme-zinc'},
        {color: '#A3A3A3', theme: 'theme-neutral'},
    ],
    [
        {color: '#A8A29E', theme: 'theme-stone'},
        {color: '#F87171', theme: 'theme-red'},
        {color: '#FB923C', theme: 'theme-orange'},
        {color: '#FBBF24', theme: 'theme-amber'},
    ],
    [
        {color: '#FACC15', theme: 'theme-yellow'},
        {color: '#A3E635', theme: 'theme-lime'},
        {color: '#4ADE80', theme: 'theme-green'},
        {color: '#34D399', theme: 'theme-emerald'},
    ],
    [
        {color: '#2DD4BF', theme: 'theme-teal'},
        {color: '#22D3EE', theme: 'theme-cyan'},
        {color: '#38BDF8', theme: 'theme-sky'},
        {color: '#60A5FA', theme: 'theme-blue'},
    ],
    [
        {color: '#818CF8', theme: 'theme-indigo'},
        {color: '#A78BFA', theme: 'theme-violet'},
        {color: '#C084FC', theme: 'theme-purple'},
        {color: '#E879F9', theme: 'theme-fuchsia'},
    ],
    [
        {color: '#F472B6', theme: 'theme-pink'},
        {color: '#FB7185', theme: 'theme-rose'},
        {color: '#000000', theme: 'dark'},
    ],
];

function ThemeMenu() {
    const setTheme = React.useContext(ThemeSwitchContext);
    const clickHandler = useCallback(
        (e) => {
            e.preventDefault();
            setTheme(e.target.getAttribute('data-theme'));
        },
        [setTheme]
    );

    return (
        <Menu as="div" className="relative flex items-center text-left">
            <Menu.Button
                className="flex flex-col items-center self-end justify-center flex-auto w-8 h-8 r unded-full bg-transparent border-transparent hover:bg-400 active:bg-400 active:text-500 text-600 focus:outline-none hover:text-700 dark:hover:bg-slate-500"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 self-center text-900 dark:text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                        clipRule="evenodd"
                    />
                </svg>
            </Menu.Button>
            <Menu.Items
                as="div"
                className="flex flex-col origin-top-right absolute mt-4 w-[12rem]
      md:w-40 p-1 border-[1px] border-200 bg-100 rounded
      focus:outline-none right-1 top-6 shadow-lg;
      dark:bg-slate-600 dark:border-slate-500"
            >
                <Menu.Item>
                    <div className="z-10 flex flex-col">
                        {themeList.map((x, i) => (
                            /* eslint-disable react/no-array-index-key */
                            <div
                                key={`${x.theme}_${i}`}
                                className="p-2 flex flex-1 flex-row flex-wrap gap-3 justify-start"
                            >
                                {x.map(({color, theme}) => (
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

export default ThemeMenu;
