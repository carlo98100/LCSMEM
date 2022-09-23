import React, { useContext } from "react";
import ArtistContext from "../contexts/ArtistList";
import EventContext from "../contexts/EventList";
import StreamButton from "../components/StreamButton";
import styled from "styled-components";

function Ticket(ticket) {
    const { events } = useContext(EventContext)
    const { artists } = useContext(ArtistContext)


    function getEvent(ticket) {
        return events.find(event => event.Id === ticket.EventId)
    }

    function getArtist(ticket) {
        return artists.find(artist => artist.Id === getEvent(ticket).ArtistId)
    }

    function Stream(ticket){
        if(getEvent(ticket).LiveStream < 1) {
            return <p>Live</p>
        } else {
            return <StreamButton VideoId={getEvent(ticket).LiveStream}/>
        }
    }



    return <>
        <TicketBody>
            <Left>
                <Image>
                    <p>#{ticket.Id + 100_000_000}</p>
                </Image>
            </Left>
            <Center>
                <DateInfo>
                    <Day>{new Date(getEvent(ticket).Date).toLocaleDateString("en-GB", {
                    weekday: "long"})}
                    </Day>
                    <FullDate>{getEvent(ticket).Date}</FullDate>
                    <Year>{new Date(getEvent(ticket).Date).toLocaleDateString("en-GB", {
                    year: "numeric"})}
                  </Year>
                </DateInfo>
                <ArtistName>
                    <h1>{getArtist(ticket).Name}</h1>
                    {getEvent(ticket).LiveStream < 1 ? <h2>Live</h2> : <h2>Stream</h2>}
                </ArtistName>
                <Time>
                    <p>
                        <span>START AT</span> {new Date(getEvent(ticket).Date).toLocaleTimeString("en-GB", {
                    hour: "2-digit", minute: "2-digit"})}
                    </p>
                    <p>{getEvent(ticket).City}</p>
                </Time>
            </Center>
            <Right>
                    <EventName>{getEvent(ticket).Name}</EventName>
                    <Time>
                        <p>
                        <span>START AT</span> {new Date(getEvent(ticket).Date).toLocaleTimeString("en-GB", {
                    hour: "2-digit", minute: "2-digit"})}
                        </p>
                    </Time>
                    <LiveOrStream>{Stream(ticket)}</LiveOrStream>
                    <p>#{ticket.Id + 100_000_000}</p>
            </Right>
        </TicketBody>
    </>
}

export default Ticket

const TicketBody = styled.div`
width: 80%;
margin: 2% 0;
display: flex;
align-self: center;
background: white;
box-shadow: #ff9e07 0px 10px 40px;
`;

const Left = styled.div`
width: 30%
display: flex;
`;

const Image = styled.div`
height: 250px;
width: 250px;
background-image: url("https://www.bamse.se/wp-content/uploads/bamse-600x730.gif");
background-size: contain;
opacity: 0.85;
`;

const Center = styled.div`
width: 40%
padding: 10px 30px;
display: flex;
flex-direction: column;
text-align: center;
justify-content: space-between;
align-items: center;
`;

const Right = styled.div`
width: 30%
border-left: 1px dashed #404040;
height: 250px;
padding: 10px 10px 10px 35px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`;

const ArtistName = styled.div`
h1 {
    margin: 0;
}
`;

const EventName = styled.div`
font-size: 18px;
`;

const Time = styled.div`
padding: 10px 0;
color: #ff9b00;
text-align: center;
display: flex;
flex-direction: column;
gap: 10px;
font-weight: 700;
p {
    margin:0;
}
span {
    font-weight: 400;
	color: gray;
}
`;

const DateInfo = styled.p`
font-weight: 700;
border-top: 1px solid gray;
border-bottom: 1px solid gray;
padding: 5px 0;
display: flex;
align-items: center;
justify-content: space-around;
&:span {
    width: 100px;
}
`;

const FullDate = styled.span`
color: #ff9b00;
font-size: 20px;
`;

const Day = styled.span`
padding-right: 15px;
`;

const Year = styled.span`
padding-left: 15px;
`;


const LiveOrStream = styled.div`

`;
