import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "../css/PurchaseHistory.css";
import LeftProfileNav from "../components/LeftProfileNav";

function PurchaseHistory() {
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
      const response = await fetch(`/data/Artist/${id}`, {
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
      const response = await fetch(`/data/events/${id}`, {
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

    return (
      <Container>
        <LeftProfileNav />
        <RightContainer>
          <TicketsTitle>Your purchased tickets</TicketsTitle>
          <HistoryBody>
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
              rel="stylesheet"
            />
            <HistoryTable>
              <thead>
                <tr>
                  <th> Artist </th>
                  <th> City </th>
                  <th> Date </th>
                  <th> Price </th>
                </tr>
              </thead>
              {ticketInformation.map((ticket) => (
                <tbody>
                  <tr>
                    <th> {artistInformation.Name} </th>
                    <td> {eventInformation.City} </td>
                    <td> {eventInformation.Date} </td>
                    <td> </td>
                  </tr>
                </tbody>
              ))}
            </HistoryTable>
          </HistoryBody>
        </RightContainer>
      </Container>
    );
  }
}

export default PurchaseHistory;

const Container = styled.div`
  display: flex;
  justify-content: center;
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
`;

const TicketsTitle = styled.h1`
  background-color: #292929;
  color: #ff9e07;
  text-align: center;
  padding: 15px;
  margin: 0;
  border-bottom: 2px solid black;
`;
