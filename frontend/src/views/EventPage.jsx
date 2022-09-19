import React, { useContext, useEffect , useState} from "react";
import styled from "styled-components";
import Search from "../components/Search";

const EventPage = () => {

  const [inputText, setInputText] = useState('Pink');

  // useEffect(() => {
  //   Search();
  // }, [input]);

  return (
    <>
      <Search/>
      <SearchContainer className="Search">
          <input type="text" placeholder="Search" id="search" value={inputText} onChange={e => {
            console.log(`stuff: ${e.target.value}`)
            setInputText(e.target.value)}}/>
      </SearchContainer>
        <Container className="event-list">
          <h1>Event List</h1>
          {Search(inputText).map((event) => (
            <h2 key={event.Id}>
              {event.Date} - {x} - {event.City}
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

const ListContainer = styled.div`
    display: flex;
`;
const SearchContainer = styled.div`
    dislpay: flex;
    margin-top: 4%;
    margin-bottom: 1%;
`;
