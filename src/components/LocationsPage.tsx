import React from "react";
import { request, gql, GraphQLClient } from "graphql-request";
import { getElementError } from "@testing-library/react";
import { useParams } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import Loading from "./Loading";
import { Link } from "react-router-dom";

export default function LocationsPage() {
  const { locationName } = useParams();
  console.log(locationName);
  const [loading, setLoading] = React.useState(true);
  const [location, setLocation] = React.useState<any>({});
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
          locations ${
            locationName ? `(page: 1, filter: {name: "${locationName}"})` : ``
          } {
            results {
              id
              name
              type
              dimension
              residents {
                id
                name
                image
                status
                species
                gender
                origin {
                  name
                }
                location {
                  name
                }
              }
            }
          }
        }
      `;
      const data = await graphQLClient.request(query);
      const { name, type, dimension, residents } = data.locations.results[0];
      setLocation({
        name,
        type,
        dimension,
        residents,
      });
    } catch (err) {
      console.log(err);
    }
  }
  React.useEffect(() => {
    getLocations();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationName]);
  console.log(location);
  return loading ? (
    <Loading />
  ) : (
    <>
      <div>
        <span className='text-gray-400'>
          <>
            <Link to='/'>Home</Link> | Location: {locationName}{" "}
            {location.type && `| Type: ${location.type} `}
            {location.dimension && `| Dimension: ${location.dimension}`}
          </>
        </span>
      </div>{" "}
      {location.residents && (
        <div className='grid grid-cols-2 gap-2'>
          {location.residents.map((char: any, i: number) => (
            <CharacterCard char={char} key={i} />
          ))}
        </div>
      )}
    </>
  );
}
