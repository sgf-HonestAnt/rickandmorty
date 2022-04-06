import React from "react";
import { request, gql, GraphQLClient } from "graphql-request";
// import { getElementError } from "@testing-library/react";
import { useParams } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import Pagination from "./Pagination";
import Loading from "./Loading"
import { Link } from "react-router-dom";

export default function CharactersPage() {
  const { characterName } = useParams();
  console.log(characterName);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [characters, setCharacters] = React.useState<any>([]);
  async function getCharacters() {
    const endpoint = "https://rickandmortyapi.com/graphql";
    try {
      // const headers = { "Content-Type": "application/json" };
      const graphQLClient = new GraphQLClient(
        endpoint
        // , { headers }
      );
      const query = gql`
        {
          characters${
            page !== 1
              ? `(page: ${page})`
              : characterName
              ? `(page: 1, filter: {name: "${characterName}"})`
              : ``
          } {
            info {
              count
              pages
              next
              prev
            }
            results {
              id
              name
              image
              status
              species
              gender
              origin {
                id
                name
              }
              location {
                id
                name
              }
            }
          }
        }
      `;
      const data = await graphQLClient.request(query);
      console.log(data.characters.info);
      setCharacters(data.characters.results);
    } catch (err) {
      console.log(err);
    }
  }
  React.useEffect(() => {
    getCharacters();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterName, page]);
  console.log(characters);
  return loading ? (
    <Loading />
  ) : (
    <>
      <div>
        <span className='text-gray-400'>
          {characterName ? (
            <>
            <Link to='/'>Home</Link> | Character: {characterName}
            </>
          ) : (
            <Pagination page={page} setPage={setPage} />
          )}
        </span>
      </div>
      <div className='grid grid-cols-2 gap-2'>
        {characters.map((char: any, i: number) => (
          <CharacterCard char={char} key={i} />
        ))}
      </div>
    </>
  );
}
