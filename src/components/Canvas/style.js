import styled from "styled-components";

export const AreaKart3D = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 100%;
  height: 100vh;

  background-color: transparent;

  & > h3 {
    font-size: 28px;
    margin-bottom: 20px;
    color: white;
    text-shadow: 1px 1px 5px black;
  }

  & > button {
    position: absolute;
    top: 15vh;
    right: 12vw;

    z-index: 10000;

    @media (min-width: 1024px) {
      top: 15vh;
      right: 10vw;
    }

    & > svg {
      font-size: 25px;
      color: white;

      @media (min-width: 1024px) {
        font-size: 30px;
      }
    }
  }
  .canvas {
    animation: openCanvas 1s;

  @keyframes openCanvas {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  }
`;

export const LabelInstrutions = styled.div`
  display: flex;

  width: 80vw;
  max-width: 360px;
  height: 80vh;

  z-index: -1px;

  background-color: #333333;

  border-radius: 7px;

  @media (min-width: 1024px) {
    height: 70%;
    max-width: 25vw;
  }
`;
