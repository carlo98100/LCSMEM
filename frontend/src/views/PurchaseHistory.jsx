import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../css/Ticket.css";

function PurchaseHistory() {
  return (
    <Container>
      <LeftContainer>
        <Text>Your profile</Text>
        <Link to="/PurchaseHistory">Purchase History</Link>
        <Link to="/UserDetails">Change user info</Link>
      </LeftContainer>
      <RightContainer>
        <TicketsTitle>Your purchased tickets</TicketsTitle>'
        <TicketBody>
          <div class="ticketbody"></div>
          <div class="ticket">
            <div class="left">
              <div class="image">
                <p class="admit-one">
                  <span>ADMIT ONE</span>
                  <span>ADMIT ONE</span>
                  <span>ADMIT ONE</span>
                </p>
                <div class="ticket-number">
                  <p>#20030220</p>
                </div>
              </div>
              <div class="ticket-info">
                <p class="date">
                  <span>TUESDAY</span>
                  <span class="june-29">JUNE 29TH</span>
                  <span>2021</span>
                </p>
                <div class="show-name">
                  <h1>Bamse R-Rated</h1>
                  <h2>Live</h2>
                </div>
                <div class="time">
                  <p>
                    8:00 PM <span>TO</span> 11:00 PM
                  </p>
                  <p>
                    DOORS <span>@</span> 7:00 PM
                  </p>
                </div>
                <p class="location">
                  <span>Malmö Arena</span>
                  <span class="separator">
                    <i class="far fa-smile"></i>
                  </span>
                  <span>Malmö, Skåne</span>
                </p>
              </div>
            </div>
            <div class="right">
              <p class="admit-one">
                <span>ADMIT ONE</span>
                <span>ADMIT ONE</span>
                <span>ADMIT ONE</span>
              </p>
              <div class="right-info-container">
                <div class="show-name">
                  <h1>Bamse R-Rated</h1>
                </div>
                <div class="time">
                  <p>
                    8:00 PM <span>TO</span> 11:00 PM
                  </p>
                  <p>
                    DOORS <span>@</span> 7:00 PM
                  </p>
                </div>
                <div class="barcode"></div>
                <p class="ticket-number">#20030220</p>
              </div>
            </div>
          </div>
          <div class="ticket">
            <div class="left">
              <div class="image">
                <p class="admit-one">
                  <span>ADMIT ONE</span>
                  <span>ADMIT ONE</span>
                  <span>ADMIT ONE</span>
                </p>
                <div class="ticket-number">
                  <p>#20030220</p>
                </div>
              </div>
              <div class="ticket-info">
                <p class="date">
                  <span>TUESDAY</span>
                  <span class="june-29">JUNE 29TH</span>
                  <span>2021</span>
                </p>
                <div class="show-name">
                  <h1>Bamse R-Rated</h1>
                  <h2>Online</h2>
                </div>
                <div class="time">
                  <p>
                    8:00 PM <span>TO</span> 11:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div class="right">
              <p class="admit-one">
                <span>ADMIT ONE</span>
                <span>ADMIT ONE</span>
                <span>ADMIT ONE</span>
              </p>
              <div class="right-info-container">
                <div class="show-name">
                  <h1>Bamse R-Rated</h1>
                </div>
                <div class="time">
                  <p>
                    8:00 PM <span>TO</span> 11:00 PM
                  </p>
                </div>
                <div class="barcode"></div>
                <p class="ticket-number">#20030220</p>
              </div>
            </div>
          </div>
        </TicketBody>
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
