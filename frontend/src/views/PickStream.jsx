import { useState, useContext, useEffect } from "react";
import React from "react";
import StreamButton from "../components/StreamButton";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Login from "./Login";

const PickStream = () => {
  const { user } = useContext(UserContext);
  return user.loggedIn ? (
    <Container>
      <h1>Select a video</h1>

      <StreamButton VideoId={1} />
      <StreamButton VideoId={2} />
      <StreamButton VideoId={3} />
    </Container>
  ) : (
    <Login />
  );
};

export default PickStream;

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
