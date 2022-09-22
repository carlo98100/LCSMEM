import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import LeftProfileNav from "../components/LeftProfileNav";
import TicketContext from "../contexts/TicketsList";
import UserContext from "../contexts/UserContext";
import TicketHistoryList from "../components/TicketHistoryList";

function PurchaseHistory() {
  const { tickets } = useContext(TicketContext);
  const { user, userList } = useContext(UserContext);

  function getUsersTicketHistoryList() {
    let temp = [];
    tickets.forEach((ticket) => {
      if (ticket.UserId === getUserId()) {
        temp.push(ticket);
      }
    });
    return temp;
  }

  function getUserId() {
    return userList.find((userL) => userL.email === user.email).id;
  }

  return (
    <Container>
      <LeftProfileNav />
      <RightContainer>
        <TicketsTitle>Your ticket history</TicketsTitle>
        <Body>
          <HistoryBody>
            <HistoryTable>
              <Thead>
                <tr>
                  <th> Artist </th>
                  <th> City </th>
                  <th> Event Date </th>
                  <th> Date Purchased </th>
                  <th> Price </th>
                </tr>
              </Thead>
              {getUsersTicketHistoryList().map((ticket) =>
                TicketHistoryList(ticket)
              )}
            </HistoryTable>
          </HistoryBody>
        </Body>
      </RightContainer>
    </Container>
  );
}

export default PurchaseHistory;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const RightContainer = styled.div`
  background-color: #565656;
  flex: 1 1 70%;
  // ch = how many characters wide
  min-width: 25ch;
  /* height: calc(100vh - 70px); */
  margin: 0;
  padding: 0;
`;

const TicketsTitle = styled.h1`
  background-color: #292929;
  color: #ff9e07;
  text-align: center;
  padding: 15px;
  margin: 0;
  border-bottom: 2px solid black;
`;

const Body = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Thead = styled.thead`
  background-color: #292929;
  color: #ff9e07;
  width: 25%;
`;

const HistoryBody = styled.body`
  font-family: "Inter", sans-serif;
  color: #343a40;
  line-height: 1;
  display: flex;
  justify-content: center;
`;

const HistoryTable = styled.table`
  width: 800px;
  margin-top: 80px;
  /* border: 1px solid #343a40; */
  border-collapse: collapse;
  font-size: 18px;
  @media screen {
    width: 600px;
    margin-top: 60px;
    /* border: 1px solid #343a40; */
    border-collapse: collapse;
    font-size: 18px;
  }
`;
