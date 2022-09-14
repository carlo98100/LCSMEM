import { React, useEffect, useState } from "react";

function eventList() {

    const alleEventsList = [];
    async function GetAllEvents() {
        try {
          const response = await fetch(`/data/Event`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const jsonData = await response.json();
          console.log("getallevents");
          console.log(jsonData);
          alleEventsList.push(jsonData);
          console.log(eventList);
        } catch (err) {
          console.error(err);
        }
      }
    return alleEventsList;
}

export default eventList;