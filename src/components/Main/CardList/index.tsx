import React, { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import Cards from "../Cards";
import { List } from "./style";

function CardList() {
  const { filtredList } = useContext(SearchContext);

  return (
    <List>
      {filtredList.map((kart) => {
        return <Cards key={kart.id} kart={kart}></Cards>;
      })}
    </List>
  );
}

export default CardList;
