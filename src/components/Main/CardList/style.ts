import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  max-width: 1080px;
  height: 400px;

  margin-bottom: 20px;

  @media (max-width: 1100px){
    overflow-x: scroll;
  }

  ::-webkit-scrollbar{
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--buttonBG);
    border-radius: 50px;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--buttonBG);
  }
`;
