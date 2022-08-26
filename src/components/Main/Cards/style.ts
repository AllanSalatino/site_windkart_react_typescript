import styled from "styled-components";

export const CardTag = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  min-width: 250px;
  max-width: 250px;
  height: 350px;

  background-color: rgb(255 255 255 / 70%);

  border: 1px solid var(--greenWater);
  border-radius: 10px;

  margin: 0px 10px;

  box-shadow: 2px 2px 15px #00eeff6b;

  transition: .3s;
  :hover {
    box-shadow: 2px 2px 15px var(--greenWater);
    min-width: 260px;
    height: 360px;
    background-color: white;
  }

  & > img {
    border-radius: 10px 10px 0px 0px;
  }

  & > h4 {
    margin-left: 15px;
  }
  & > h3 {
    margin-left: 15px;
  }
  & > span {
    margin-left: 15px;
  }
  & > button {
    margin-left: 15px;
    margin-bottom: 15px;
    text-decoration: underline;
  }
`;
