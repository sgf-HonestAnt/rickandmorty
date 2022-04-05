import * as React from "react";
import { request, gql, GraphQLClient } from "graphql-request";
import { getElementError } from "@testing-library/react";

export default function Locations() {
  const [loading, setLoading] = React.useState(true);
  const [locations, setLocations] = React.useState<any>([]);
  async function getLocations() {
    const endpoint = "https://rickandmortyapi.com/graphql";
    try {
      // const headers = { "Content-Type": "application/json" };
      const graphQLClient = new GraphQLClient(
        endpoint
        // , { headers }
      );
      const query = gql`
        {
          locations {
            results {
              id
              name
              type
              dimension
              residents {
                name
                image
                status
                species
                gender
                origin {
                  name
                }
              }
            }
          }
        }
      `;
      const data = await graphQLClient.request(query);
      setLocations(data.locations.results);
    } catch (err) {
      console.log(err);
    }
  }
  React.useEffect(() => {
    getLocations();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  console.log(locations);
  return loading ? (
    <>
      <p className='text-gray-400 flex items-center'>
        <svg
          className='animate-pulse w-4 h-4 mr-1'
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'>
          <circle cx='50' cy='50' r='50' />
        </svg>
        Loading Rick and Morty locations using graphql-request...
      </p>
    </>
  ) : (
    <div className='grid grid-cols-2 gap-2'>
      {/* {locations.map((char: any, i: number) => (
        // <div>{char.name}</div>
        <div
          key={i}
          className='flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img
            className='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
            src={char.image}
            alt={char.name}
          />
          <div className='flex flex-col justify-between p-4 leading-normal'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {char.name}
            </h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Status: {char.status} | Species: {char.species} | Gender:{" "}
              {char.gender} | Origin: {char.origin.name} | Location:{" "}
              {char.location.name}
            </p>
          </div>
        </div>
      ))} */}
    </div>
  );
}
