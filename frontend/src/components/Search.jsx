import { React, useState } from "react";
import List from "./searchList";
import styled from "styled-components";

function Search() {

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <Container>
      <SearchContainer className="Search">
        <input type="text" placeholder="Search" onChange={inputHandler}/>
      </SearchContainer>
      <ListContainer>
        <List input={inputText}/>
      </ListContainer>
    </Container>
  );
}

export default Search;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const ListContainer = styled.div`
    display: flex;
`
const SearchContainer = styled.div`
    dislpay: flex;
    margin-top: 4%;
    margin-bottom: 1%;
`