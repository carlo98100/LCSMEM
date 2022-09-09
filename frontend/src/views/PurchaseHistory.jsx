import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PurchaseHistory() {
  return (
    <Container>
      <LeftContainer>
        <Text>Your profile</Text>
        <Link to="/PurchaseHistory">Purchase History</Link>
        <Link to="/UserDetails">Change user info</Link>
      </LeftContainer>
      <RightContainer>
        <TicketsTitle>Your purchased tickets</TicketsTitle>
        <TicketHistory>
          <TicketUl>
            <TicketLi>
              <TextSpan className="date">20 oktober</TextSpan>
              <TextSpan className="name">Iron Maiden</TextSpan>
              <TextSpan className="price">350 kr</TextSpan>
              <Link to="/TicketInfo">More info</Link>
            </TicketLi>
          </TicketUl>
        </TicketHistory>
        <TicketHistory>
          <TicketUl>
            <TicketLi>
              <TextSpan className="date">20 oktober</TextSpan>
              <TextSpan className="name">Iron Maiden</TextSpan>
              <TextSpan className="price">350 kr</TextSpan>
              <Link to="/TicketInfo">More info</Link>
            </TicketLi>
          </TicketUl>
        </TicketHistory>
        <TicketHistory>
          <TicketUl>
            <TicketLi>
              <TextSpan className="date">20 oktober</TextSpan>
              <TextSpan className="name">Iron Maiden</TextSpan>
              <TextSpan className="price">350 kr</TextSpan>
              <Link to="/TicketInfo">More info</Link>
            </TicketLi>
          </TicketUl>
        </TicketHistory>
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
  /* height: calc(100vh - 70px); */
  margin: 0;
  padding: 0;
`;

const Text = styled.h1`
  text-align: center;
  background-color: gray;
  padding: 15px;
  border-radius: 10px;
`;

const TicketUl = styled.ul`
  position: relative;
  width: 450px;
  margin: 100px auto 0;
  padding: 10px;
  box-sizing: border-box;
`;

const TicketLi = styled.li`
  display: flex;
  background: rgba(255, 255, 255.1);
  padding: 10px 20px;
  color: #000000;
`;

const TextSpan = styled.span`
  &:nth-child(1) {
    width: 100px;
  }
  &:nth-child(2) {
    width: 200px;
    text-align: center;
  }
  &:nth-child(3) {
    width: 100px;
    text-align: right;
  }
`;

const TicketsTitle = styled.h1`
  text-align: center;
  background-color: gray;
  padding: 15px;
  margin: 0;
`;

const TicketHistory = styled.body`
  margin: 0;
  padding: 0;
`;
