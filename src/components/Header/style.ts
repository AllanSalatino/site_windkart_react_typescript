import styled from "styled-components";

export const HeaderTag = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 170px;

  background-image: radial-gradient(rgb(30, 95, 92), rgba(82, 100, 99, 0.267));
  box-shadow: rgba(128, 128, 128, 0.534) 3px 3px 15px;

  margin-bottom: 25px;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 200px;

    margin-bottom: 30px;
  }

  & > section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 95%;
    max-width: 1024px;
  }
`;

export const ButtonFilter = styled.button`
  font-family: "Josefin Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  background-color: var(--buttonBG);
  box-shadow: r;
  color: var(--white);
  margin: 0px 2px;
  padding: 8px 0px;
  width: 85px;

  @media (min-width: 500px) {
    font-family: "Josefin Sans", sans-serif;
    font-size: 16px;
    font-weight: 700;

    background-color: var(--buttonBG);
    box-shadow: 2px 2px 10px var(--buttonShadow);
    color: var(--white);

    padding: 8px 0px;

    width: 120px;
  }

  :hover,
  :focus,
  :active {
    background-color: #00ffd44f;
    box-shadow: 2px 2px 25px var(--greenWater);
    width: 125px;
  }
`;

export const Logo = styled.h1`
  color: var(--darkBlue);
`;

export const Tipo = styled.h1`
  color: var(--greenWater);
`;
