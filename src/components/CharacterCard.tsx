import React from "react";
import { Link } from "react-router-dom";

export default function CharacterCard(props: { char: any }) {
  const { char } = props;
  return (
    <div className='flex flex-col items-center col-span-2 md:col-span-1 bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
      <img
        className='object-cover w-full h-48 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
        src={char.image}
        alt={char.name}
      />
      <div className='flex flex-col justify-between p-4 leading-normal'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          <Link to={`/characters/${char.name}`}>{char.name}</Link>
        </h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          Status: {char.status} | Species:{" "}
          {char.species} | Gender:{" "}
          {char.gender} | Origin:{" "}
          {char.origin.id ? (
            <Link to={`/locations/${char.origin.name}`}>
              {char.origin.name}
            </Link>
          ) : (
            char.origin.name
          )}{" "}
          |{" "}
          {char.location.id ? (
            <Link to={`/locations/${char.location.name}`}>
              Location: {char.location.name}
            </Link>
          ) : (
            char.location.name
          )}
        </p>
      </div>
    </div>
  );
}
