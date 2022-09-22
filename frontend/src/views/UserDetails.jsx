import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../components/Input";
import LeftProfileNav from "../components/LeftProfileNav";

function UserDetails() {
  return (
    <Container>
      <LeftProfileNav />
      <RightContainer>
        <TicketsTitle>Your information</TicketsTitle>
      </RightContainer>
    </Container>
  );
}

export default UserDetails;

const Container = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
  background-color: #67b98d;
  flex: 1 1 70%;
  // ch = how many characters wide
  min-width: 25ch;
  height: calc(100vh - 70px);
`;

const TextH3 = styled.h3`
  text-align: center;
  background-color: gray;
  padding: 15px;
  border-radius: 10px;
`;

const TicketsTitle = styled.h1`
  background-color: #292929;
  color: #ff9e07;
  text-align: center;
  padding: 15px;
  margin: 0;
  border-bottom: 2px solid black;
`;