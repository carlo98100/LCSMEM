import React, { Component } from "react";
import { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ArtistContext from "../contexts/artistList";
import styled from "styled-components";

function Home() {
  const { artist } = useContext(ArtistContext);

  const imageList = [];

  function getImages() {
    artist.map((artist) => {
      imageList.push(artist.Image);
    });
    console.log(imageList);
    return imageList;
  }

  return (
    <Container>
      <Carousel centerSlidePercentage="100%">
        {getImages().map((image) => (
          <Image key={image}>
            <img src={image} />
          </Image>
        ))}
      </Carousel>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 2% 15%;
`;

const Image = styled.div`
  img {
    background-size: cover;
    background-position: center;
  }
`;
