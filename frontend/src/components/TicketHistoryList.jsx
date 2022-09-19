import React, { useContext } from "react";
import ArtistContext from "../contexts/artistList";
import EventContext from "../contexts/eventList";
// import "../css/PurchaseHistory.css";
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
      <HistoryBody>
        <HistoryTable>
          <Thead>
            <tr>
              <th> Artist </th>
              <th> City </th>
              <th> Date </th>
              <th> Price </th>
            </tr>
          </Thead>
          <tbody>
            <tr>
              <th> {getArtist(ticket).Name} </th>
              <td> {getEvent(ticket).City} </td>
              <td> {getEvent(ticket).Date} </td>
              <td> Dyrt </td>
            </tr>
          </tbody>
        </HistoryTable>
      </HistoryBody>
    </>
  );
}

export default TicketHistoryList;

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

const Thead = styled.thead`
  background-color: #087f5b;
  color: #fff;
  width: 25%;
`;

// const Th = styled.th`
//   /* border: 1px solid #343a40; */
//   padding: 16px 24px;
//   text-align: left;
// `;

// const Td = styled.td`
//   /* border: 1px solid #343a40; */
//   padding: 16px 24px;
//   text-align: left;
// `;

// const Tr = styled.tr`
//   /* border: 1px solid #343a40; */
//   padding: 16px 24px;
//   text-align: left;
// `;
