import styled from "styled-components";

export const Body = styled.div`
    text-align: center;
    background-image: linear-gradient(to bottom, #003b33, #7eb6af, #b67c4f, #333333);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  @media (min-width: 1024px) {
      background-image: none;
  }
`;

export const Background = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: 1450px;
  height: auto;
  z-index: -100;
  background-size: cover;
`;
