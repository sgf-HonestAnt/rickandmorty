import React from "react";

export default function Loading(props: { location?: string }) {
  return (
    <p className='text-gray-400 flex items-center'>
      <svg
        className='animate-pulse w-4 h-4 mr-1'
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'>
        <circle cx='50' cy='50' r='50' />
      </svg>
      Loading
      {props.location ? (
        <span className="mx-2">
          citizens of <strong>{props.location}</strong>
        </span>
      ) : (
        <span className="mx-2">
          <strong>Rick and Morty Characters</strong>
        </span>
      )}
      using graphql-request...
    </p>
  );
}
