import React, { useContext } from "react";
import ArtistContext from "../contexts/artistList";
import EventContext from "../contexts/eventList";
//import "../css/PurchaseHistory.css";
import styled from "styled-components";

function TicketHistoryList(ticket) {
  const { events } = useContext(EventContext);
  const { artist } = useContext(ArtistContext);

  function getEvent(ticket) {
    return events.find((event) => event.Id === ticket.EventId);
  }

  function getArtist(ticket) {
    return artist.find((artist) => artist.Id === getEvent(ticket).ArtistId);
  }

  return (
    <>
      <Tbody>
        <Tr>
          <Th> {getArtist(ticket).Name} </Th>
          <Td> {getEvent(ticket).City} </Td>
          <Td> {getEvent(ticket).Date} </Td>
          <Td> Date purchased </Td>
          <Td> Dyrt </Td>
        </Tr>
      </Tbody>
    </>
  );
}

export default TicketHistoryList;

const Tbody = styled.tbody`
  background-color: #f8f9fa;
`;

const Th = styled.th`
  /* border: 1px solid #343a40; */
  padding: 16px 24px;
  text-align: left;
`;

const Td = styled.td`
  /* border: 1px solid #343a40; */
  padding: 16px 24px;
  text-align: left;
`;

const Tr = styled.tr`
  /* border: 1px solid #343a40; */
  padding: 16px 24px;
  text-align: left;
`;
