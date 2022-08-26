import styled from "styled-components";

export const Desktop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 100%;

    padding: 10px;
    
    & > span{
      width: 72.35%;
      & > button {
        color: white;
        font-size: 30px;
        font-weight: 700;
        background-color: #333333;
        border-radius: 50px;
        padding: 2px;
        width: 40px;
  
        position: relative;
        top: -10px;
        right: -64%;
      }
    }

    & > h3 {
      color: #f9ff68;
      text-align: center;
      margin-bottom: 15px;
    }

    & > section{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 50vh;
      width: 70vw;
    
      & > div {
        width: 20vw;
        
        border-radius: 7px;

        padding: 10px;

        & > h4 {
          background-color: transparent;
          color: #a3ffba;
        }
        & > p {
          font-size: 16px;
          text-align: initial;
          margin-left: 15px;
        }
      }

      @media (min-width: 1024px){
        width: auto;
      }
    }

`