import React from "react";
import styled from "styled-components";

export default function Recherche({ data }) {
  return (
    <Container>
      <div className="container_card">
     
      </div>
    </Container>
  );
}
const Container = styled.div`
  .container_card {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 3fr 3fr 3fr;
  }
  .card {
    border: 2px solid red;
  }
`;
