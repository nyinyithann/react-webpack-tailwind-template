import React from 'react';

import Loading from '../components/Loading';

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-center dark:text-slate-300">
            <p>Hello, World!</p>
            <Loading className="w-[4rem] h-[3rem] stroke-[0.2rem] p-3 stroke-klor-200 text-700"/>
    </div>
  );
}
