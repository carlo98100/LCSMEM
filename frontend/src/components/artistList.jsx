import { React, useEffect, useState } from "react";

function artistList() {

  const allArtistList = [];
    async function GetArtists() {
        try {
          const response = await fetch(`/data/artist`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const jsonData = await response.json();
          console.log("getallartists");
          allArtistList.push(jsonData);
        } catch (err) {
          console.error(err);
        }
    } 
  return allArtistList;
}

export default artistList;