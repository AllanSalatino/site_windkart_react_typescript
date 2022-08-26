import React from "react";
import CardList from "./CardList";
import { SearchBar } from "./SearchBar";
import { MainTag } from "./style";

function Main() {
  return (
    <MainTag>
      <SearchBar />
      <CardList />
    </MainTag>
  );
}

export default Main;
