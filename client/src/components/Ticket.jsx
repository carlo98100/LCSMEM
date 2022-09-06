import React from 'react'
import styled from 'styled-components';

function Ticket(date, location, type) {
    return (
        <Container>
            {/* <h1>{date}</h1> */}
        </Container>
    )
}

export default Ticket

const Container = styled.div`
    display: flex;
    width: 80%;
`;