import styled from "styled-components";

export const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  max-width: 360px;
  height: 80vh;

  padding: 10px;
  
  & > h3 {
    color: #f9ff68;
    margin: auto;
    margin-bottom: 15px;
  }

  & > section {
    width: 100%;
    height: 80vh;

    overflow-y: scroll;

    & > div {
      & > h4 {
        background-color: transparent;
        color: #a3ffba;
      }
      & > p {
        font-size: 16px;
        text-align: initial;
        margin-left: 15px;
      }
      & > img{
        border-radius: 10px;
        width: 90%;
        max-width: 325px;
        margin: 10px 5% 10px 5%;
      }
    }
  }

  & > button {
    color: white;
    font-size: 30px;
    font-weight: 700;
    background-color: #333333;
    border-radius: 50px;
    padding: 2px;
    width: 40px;

    position: relative;
    top: -3px;
    right: -87%;
  }
`;
