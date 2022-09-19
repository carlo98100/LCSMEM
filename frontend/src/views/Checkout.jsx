import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import { getCart } from "../CartUtils";

function Checkout() {
  const tickets = getCart();
  const handleClick = async () => {
    await fetch(`/data/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: tickets }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.replace(data.url);
      })
      .catch((err) => console.error(err));
  };
  console.log(tickets);
  return (
    <div>
      {tickets?.items?.map?.((item, index) => {
        return <h1>{item.description}</h1>;
      })}
      <div>
        <button type="button" onClick={handleClick}>
          Poceed to purchase
        </button>
      </div>
    </div>
  );
}

export default Checkout;
