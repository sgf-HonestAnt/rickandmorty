import * as React from "react";
import { request, gql, GraphQLClient } from "graphql-request";
import { getElementError } from "@testing-library/react";

export default function Characters() {
  const [characters, setCharacters] = React.useState([]);
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
          characters {
            results {
              name
            }
          }
        }
      `;
      const data = await graphQLClient.request(query);
      setCharacters(data.characters.results);
    } catch (err) {
      console.log(err);
    }
  }
  React.useEffect(() => {
    getCharacters();
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
  }, []);
  console.log(characters)
  return <div>Hi</div>;
}
