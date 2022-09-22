import { useState, useContext, useEffect } from "react";
import LeftProfileNav from "../components/LeftProfileNav";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Login from "./Login";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  // useEffect(() => {
  //   isLoggedIn();
  // }, []);
  return user.loggedIn ? (
    <Container>
      <LeftProfileNav />
      <RightContainer>
        <TicketsTitle>Your upcoming concerts</TicketsTitle>
      </RightContainer>
    </Container>
  ) : (
    <Login />
  );
};

export default ProfilePage;

const Container = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
  background-color: #6767b9;
  flex: 1 1 70%;
  // ch = how many characters wide
  min-width: 25ch;
  height: calc(100vh - 70px);
`;

const TicketsTitle = styled.h1`
  background-color: #292929;
  color: #ff9e07;
  text-align: center;
  padding: 15px;
  margin: 0;
  border-bottom: 2px solid black;
`;
