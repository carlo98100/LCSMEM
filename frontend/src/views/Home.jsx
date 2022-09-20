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
      <Carousel>
        {getImages().map((image) => (
          <div key={image}>
            <img src={image} />
          </div>
        ))}
      </Carousel>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
`;
