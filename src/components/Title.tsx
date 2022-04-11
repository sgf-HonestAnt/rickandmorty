import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default function Title() {
  return (
    <Wrapper>
      <Heading>Rick and Morty Characters</Heading>
    </Wrapper>
  );
}
