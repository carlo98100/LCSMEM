import React, { useState } from "react";
import styled from "styled-components";
import Search from "../components/Search";

const EventPage = () => {
  const [inputText, setInputText] = useState("");

  // useEffect(() => {
  //   Search();
  // }, [inputText]);

  return (
    <>
      <SearchContainer>
        <input type="text" placeholder="Search" id="search" onChange={e => {
          setInputText(e.target.value)
        }} />
      </SearchContainer>
      <Container>
        <h1>Event List</h1>
        {Search(inputText).map((event) => (
          <h2 key={event.Id}>
            {event.Date} - x - {event.City}
          </h2>
        ))}
      </Container>
    </>
  );
}
export default EventPage;

const Container = styled.div`
  background-color: white;
  text-align: center;
  padding: 15px;
  border-bottom: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SearchContainer = styled.div`
    dislpay: flex;
    margin-top: 4%;
    margin-bottom: 1%;
`;