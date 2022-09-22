import React from "react";

const Burger = () => {
  return (
    <StyledBurger>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
`;
