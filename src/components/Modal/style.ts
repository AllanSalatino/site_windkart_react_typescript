import styled, { css, keyframes } from "styled-components";

interface ICloseModal {
  isCloseModal: boolean;
}

const openModalMobile = keyframes`
  0% {
    height: 0vh;
  }
  100% {
    height: 80vh;
  }
`;

const closeModalMobile = keyframes`
  0% {
    height: 80vh;
  }
  100% {
    height: 0vh;
  }
`;

const openModalDesktop = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 70%;
  }
`;

const closeModalDesktop = keyframes`
  0% {
    width: 70%;
  }
  100% {
    width: 0%;
  }
`;

export const ModalInfo = styled.aside<ICloseModal>`
  position: fixed;
  right: 0;
  bottom: 0;

  z-index: 0;

  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: #0000007d;

  & > div {
    position: absolute;
    display: flex;
    flex-direction: column;

    width: 300px;
    height: 80vh;

    background-color: white;

    overflow: hidden;
    overflow-y: scroll;

    border-radius: 10px;
    border: 1px solid var(--greenWater);

    ${({ isCloseModal }) =>
      css`
        animation: ${!isCloseModal ? openModalMobile : closeModalMobile} 0.65s;
      `}

    @media (min-width: 1100px) {
      flex-direction: row;

      width: 70%;
      max-width: 1000px;
      height: 68vh;

      overflow: initial;
      overflow-y: initial;

      ${({ isCloseModal }) =>
        css`
          animation: ${!isCloseModal ? openModalDesktop : closeModalDesktop} 0.65s;
        `}
    }
    & > button {
      position: absolute;
      color: var(--balck);
      font-size: 25px;
      right: 0;
    }

    & > img {
      width: 100%;
      border-radius: 9px 9px 0px 0px;

      @media (min-width: 1100px) {
        height: 100%;
        max-width: 550px;

        border-radius: 9px 0px 0px 9px;
      }
    }

    & > section {
      gap: 10px;

      @media (min-width: 1100px) {
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;

        ::-webkit-scrollbar {
          width: 10px;
        }
      }

      & > h3 {
        margin: auto;
        margin-top: 20px;
      }
      & > span {
        margin: auto;
      }
      & > h4 {
        background-color: white;
        color: black;
        margin-left: 15px;
      }
    }
  }
`;

export const Description = styled.section`
  width: 100%;
  height: 100%;

  margin-left: 15px;

  gap: 10px;

  & > div {
    display: flex;
    flex-direction: column;

    border: 1px solid var(--greenWater);
    border-radius: 7px;

    background-color: aliceblue;

    width: 90%;

    & > h4 {
      background-color: aliceblue;
      color: var(--black);
    }

    & > p {
      color: black;
      margin: 3px;
      text-align: start;
    }
  }
`;
