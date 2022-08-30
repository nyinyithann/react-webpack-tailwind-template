import PropTypes from 'prop-types';
import React from 'react';

function AuthorLink({ link, site, title }) {
  return (
    <div>
      <span className="text-600"> {`${site}:`} </span>
      <a
        href={link}
        target="blank"
        className="underline hover:cursor-pointer hover:text-600 text-400 pl-2"
      >
        {title}
      </a>
    </div>
  );
}

AuthorLink.propTypes = {
  link: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

function About() {
  return (
    <div className="flex flex-col gap-2 text-600 font-primary text-center h-full items-center justify-center">
      <div className="-mt-40">
        <h1 className="text-base md:text-2xl font-bold pt-4">
          React Webpack template with TailwindCSS
        </h1>
        <div className="pt-4">
          <a
            target="_blank"
            rel="noreferrer"
            className="text-800 underline text-base md:text:xl text-center inline"
            href="https://github.com/nyinyithann/react-webpack-tailwind-template"
          >
            GitHub Repo
          </a>
        </div>
        <div className="pt-2 font-secondary text-base">
          <div className="flex flex-col justify-center items-center font-normal  mt-4 pt-2 border-t border-200 dark:border-slate-400">
            <div className="w-24 h-24 relative">
              <img
                src="https://avatars.githubusercontent.com/u/156037"
                alt="mygithub"
                className="w-full h-full rounded-full border-4 border-300"
              />
              <span className="bg-900 rounded-full text-xs text-200 p-1 absolute right-1 -top-1 border-2 border-300 dark:bg-slate-500 dark:text-white">
                By{' '}
              </span>
            </div>
            <AuthorLink
              link="https://github.com/nyinyithann"
              title="@nyinyithann"
              site="GitHub"
            />
            <AuthorLink
              link="https://www.linkedin.com/in/nyinyithan/"
              title="@nyinyithann"
              site="LinkedIn"
            />
            <AuthorLink
              link="https://twitter.com/JazzTuyat"
              title="@JazzTuyat"
              site="Twitter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
