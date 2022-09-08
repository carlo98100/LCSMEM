import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PurchaseHistory() {
  return (
    <Container>
      <LeftContainer>
        <Text>Your profile</Text>
        <Link to="/PurchaseHistory">Purchase History</Link>
        <Link to="/UserDetails">User Details</Link>
      </LeftContainer>
      <RightContainer>
        <TicketsTitle>Your purchased tickets</TicketsTitle>
      </RightContainer>
    </Container>
  );
}

export default PurchaseHistory;

const Container = styled.div`
  display: flex;
`;

const LeftContainer = styled.div`
  background-color: #ececec;
  flex: 1 1 30%;
  min-width: 15ch;
  height: calc(100vh - 70px);
`;

const RightContainer = styled.div`
  background-color: #b96798;
  flex: 1 1 70%;
  // ch = how many characters wide
  min-width: 25ch;
  height: calc(100vh - 70px);
`;

const Text = styled.h1`
  text-align: center;
  background-color: gray;
  padding: 15px;
  border-radius: 10px;
`;

const TextH3 = styled.h3`
  text-align: center;
  background-color: gray;
  padding: 15px;
  border-radius: 10px;
`;

const TicketsTitle = styled.h1`
  text-align: center;
  background-color: gray;
  padding: 15px;
  margin: 0;
`;
