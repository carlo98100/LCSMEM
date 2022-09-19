import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../css/PurchaseHistory.css";
import LeftProfileNav from "../components/LeftProfileNav";

function PurchaseHistory() {
  return (
    <Container>
      <LeftProfileNav/>
      <RightContainer>
        <TicketsTitle>Your purchased tickets</TicketsTitle>
        <body>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          <table>
            <thead>
              <tr>
                <th> Chair </th>
                <th> The Laid Back</th>
                <th> The Worker Bee</th>
                <th> The Chair 4/2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th> Width </th>
                <td> 80 cm </td>
                <td> 60 cm </td>
                <td> 220 cm </td>
              </tr>
              <tr>
                <th> Depth </th>
                <td> 70 cm </td>
                <td> 65 cm </td>
                <td> 80 cm </td>
              </tr>
              <tr>
                <th> Weight </th>
                <td> 16 kg </td>
                <td> 22 kg </td>
                <td> 31 kg </td>
              </tr>
              <tr>
                <th> Height </th>
                <td> 120 cm </td>
                <td> 92 cm </td>
                <td> 80 cm </td>
              </tr>
            </tbody>
          </table>
        </body>
      </RightContainer>
    </Container>
  );
}

export default PurchaseHistory;

const Container = styled.div`
  display: flex;
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
  background-color: #292929;
  color: #ff9e07;
  text-align: center;
  padding: 15px;
  margin: 0;
  border-bottom: 2px solid black;
`;

const TicketBody = styled.body`
  background: var(--background);
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

const Ticket = styled.div`
  width: 650px;
  height: 320px;
  margin: 100px auto;
  position: relative;
  transition: all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s;
  background: linear-gradient(
    to right,
    var(--color1),
    var(--color2),
    var(--color3),
    var(--color4)
  );
  border-radius: 20px;
  padding: 5px;
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 130px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    z-index: 2;
  }

  &:before {
    background: var(--color1);
    left: -30px;
  }
`;

const TicketRight = styled.div`
  background: var(--background);
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

const TicketLeft = styled.div`
  background: var(--background);
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

const TicketContentWrapper = styled.div`
  background: var(--background);
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;