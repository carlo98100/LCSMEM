import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProfilePage = () => {

  const { user } = useContext(UserContext)
  console.log(user)

  return (
    <Container>
      <LeftContainer>
        <Text>Your profile</Text>
        <Link to="/YourTickets">Your Tickets</Link>
        <Link to="/ProfilePage">Your upcoming concerts</Link>
        <Link to="/PurchaseHistory">Purchase History</Link>
        <Link to="/UserDetails">Change user info</Link>
      </LeftContainer>
      <RightContainer>
        <TicketsTitle>Your upcoming concerts</TicketsTitle>
      </RightContainer>
    </Container>
  );
};

export default ProfilePage;

const Container = styled.div`
  display: flex;
`;

const LeftContainer = styled.div`
  background-color: #ececec;
  flex: 1 1 30%;
  min-width: 15ch;
  height: calc(100vh - 70px);
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  background-color: #6767b9;
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

const TicketsTitle = styled.h1`
  text-align: center;
  background-color: gray;
  padding: 15px;
  margin: 0;
`;
