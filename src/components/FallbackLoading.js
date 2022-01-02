import React from 'react';

function FallbackLoading() {
  return (
    <div className="flex flex-col items-center m-6 p-6 text-base text-primary_900">
      <span className="block">Loading...</span>
    </div>
  );
}

export default FallbackLoading;
