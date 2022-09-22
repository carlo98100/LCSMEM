import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import { getCart } from "../CartUtils";

function Checkout() {
  const tickets = [{
    id: 1,
    description: "event.Name",
    price: 5000,
    quantity: 6
  }];
  const handleClick = async () => {
    const response = await fetch(`/data/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: tickets }),
    })
    const data = await response.json()
    console.log(data)
  
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
