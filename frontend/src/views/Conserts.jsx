import React from 'react'
import styled from "styled-components";
import Search from "../components/Search";

function Conserts() {
  return (
    <Container>
        <Search/>
    </Container>
  )
}

export default Conserts

const Container = styled.div`
	display: flex;
    justify-content: center;
    margin-left: 25%;
    margin-right: 25%;
`;