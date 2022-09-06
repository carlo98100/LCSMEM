import React from 'react'
import styled from 'styled-components'
import Ticket from '../components/Ticket';

function ConsertPage() {
    return (
        <Container>
            <LeftContainer>
                <ConsertImage src='data:image/jpeg;base64,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' />
                <ConsertTitle>Anonymous</ConsertTitle>
                <ConsertDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur risus ex, efficitur vel viverra eleifend, volutpat faucibus risus. Nullam iaculis auctor magna at dignissim. Sed auctor enim ut felis varius, non bibendum enim convallis. Proin sed nulla augue. Nulla facilisi. Nunc vestibulum eleifend sapien ut vehicula. Etiam ac magna nunc.
                    Nulla id sapien odio. Nunc auctor metus imperdiet nibh tincidunt, eget gravida dolor pretium. Morbi eu ipsum varius velit efficitur vehicula. Sed porta dui tincidunt pulvinar lacinia. Vivamus fringilla tristique tristique. Donec eu nibh tempor metus imperdiet imperdiet quis sit amet sem. Fusce tincidunt accumsan mollis. Praesent vel lacus libero. Vivamus ut ligula odio. Quisque posuere lorem interdum dui dictum ultricies. Aenean ut sodales dolor.
                    Integer at enim eu est condimentum convallis eget non nibh. Sed bibendum imperdiet magna ut imperdiet. Integer nunc lacus, dignissim eu eros id, bibendum auctor dui. Donec vulputate nunc in volutpat tincidunt. Cras sit amet faucibus nisl. Maecenas feugiat ac leo condimentum imperdiet. Aenean vulputate in metus vitae mattis. Nunc nec varius sem, sit amet fermentum diam. Suspendisse velit dolor, efficitur ut euismod sit amet, faucibus ut ligula. Suspendisse potenti. Suspendisse potenti. Suspendisse vehicula bibendum est id rhoncus.
                    Pellentesque volutpat efficitur elit, nec accumsan nisl placerat eget. Ut nunc risus, bibendum et quam a, porttitor consequat nisl. Sed sit amet nisl gravida, facilisis risus at, finibus felis. Maecenas nunc libero, pellentesque et tristique sit amet, dictum malesuada turpis. Nam ornare justo at urna pellentesque consectetur. Nulla facilisi. In sodales turpis magna, a suscipit nunc tempor vel. Curabitur turpis nibh, auctor at ultrices id, convallis eget est. Sed volutpat quis tellus eu gravida.
                    Phasellus eleifend eget ante quis fringilla. Aliquam efficitur molestie turpis, et commodo libero eleifend eu. Pellentesque aliquam, massa vitae rutrum malesuada, nibh nunc interdum nisl, at posuere libero nunc ultrices nisi. Curabitur accumsan.
                </ConsertDescription>
            </LeftContainer>

            <RightContainer>
                <TicketsTitle>Upcoming events</TicketsTitle>
                <Ticket date={"2022-09-06"} location="Bollibompagatan 32B" type="Livestream" ></Ticket>
            </RightContainer>
        </Container>
    )
}

export default ConsertPage


const Container = styled.div`
    display: flex;
`;


const LeftContainer = styled.div`
    background-color: Red;
    height:  calc(100vh - 70px);
    width: 50%;
`;


const RightContainer = styled.div`
    background-color: Blue;
    height:  calc(100vh - 70px);
    width: 50%;
`;

const ConsertImage = styled.img`
    width: 100%;
    height: 40%;
`;

const ConsertTitle = styled.h1`
    /* display: inline-block; */
    text-align: center;
    background-color: gray;
    padding: 15px;
    border-radius: 10px;

`;

const ConsertDescription = styled.p`
    font-size: 1.25em;
    margin: 2em;
    border: 2px solid green;
`;

const TicketsTitle = styled.h1`
    text-align: center;
    background-color: gray;
    padding: 15px;
    margin: 0;

`;