import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../css/Ticket.css";
import LeftProfileNav from "../components/LeftProfileNav";

function YourTickets() {
  const { userId } = useParams();
  // const [form, setForm] = useState([]);
  const [ticketInformation, setTicketInformation] = useState([]);
  const [artistInformation, setArtistInformation] = useState([]);
  const [eventInformation, setEventInformation] = useState([]);

  useEffect(() => {
    if (!userId) return;
    GetArtistInformation();
    GetEventInformation();
    GetTicketInformation(userId);
  }, []);

  async function GetTicketInformation(id) {
    try {
      const response = await fetch(`/data/Ticket/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonData = await response.json();
      setTicketInformation(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err);
    }
  }

  async function GetArtistInformation(id) {
    try {
      const response = await fetch(`/data/Artist/2`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonData = await response.json();
      setArtistInformation(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err);
    }
  }

  async function GetEventInformation(id) {
    try {
      const response = await fetch(`/data/events/2`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonData = await response.json();
      setEventInformation(jsonData);
      setForm(jsonData);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Container>
      <LeftProfileNav/>
      <RightContainer>
        <TicketsTitle>Your tickets</TicketsTitle>
        <TicketBody>
          {ticketInformation.map((ticket) => (
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
                    <span class="june-29">{eventInformation.Date}</span>
                    <span>2021</span>
                  </p>
                  <div class="show-name">
                    <h1>{artistInformation.Name}</h1>
                    <h2>Live</h2>
                  </div>
                  <div class="time">
                    <p>
                      8:00 PM <span>TO</span> 11:00 PM
                    </p>
                    <p>{eventInformation.City}</p>
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
                    <h1>{artistInformation.Name}</h1>
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
          ))}
          {/* <div class="ticketbody"></div>
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
                  <h1>.</h1>
                  <h2>Live</h2>
                </div>
                <div class="time">
                  <p>
                    8:00 PM <span>TO</span> 11:00 PM
                  </p>
                  <p>Malmö Arena @ Malmö</p>
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
                <div class="show-name"></div>
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
                  <h1>.</h1>
                  <h2>Live</h2>
                </div>
                <div class="time">
                  <p>
                    8:00 PM <span>TO</span> 11:00 PM
                  </p>
                  <p>Malmö Arena @ Malmö</p>
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
                <div class="show-name"></div>
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
          </div>  */}
        </TicketBody>
      </RightContainer>
    </Container>
  );
}

export default YourTickets;

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
