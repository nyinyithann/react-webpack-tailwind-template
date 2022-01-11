import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center pt-20 text-lg font-medium text-center text-slate-600">
      <div className="w-full h-0 pb-40 relative">
        <iframe
          src="https://giphy.com/embed/0s4qt8wXIkI2S6nqqp"
          width="100%"
          height="100%"
          frameBorder="0"
          className="absolute"
          allowFullScreen
        />
      </div>
      <p>
        <a href="https://giphy.com/gifs/thismorning-itv-this-morning-0s4qt8wXIkI2S6nqqp" />
      </p>
      <span className="my-5">
        Hmm... this page doesn't exist. Please go to the home page by clicking
        on the link below.
      </span>
      <p className="font-nav font-medium text-primary_900 underline cursor hover:text-primary_700">
        <Link to="/">HOME</Link>
      </p>
    </div>
  );
}

export default NotFound;
