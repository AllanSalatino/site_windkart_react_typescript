import React, { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import Cards from "../Cards";
import { List } from "./style";

function CardList() {
  const { filtredList, kartsList } = useContext(SearchContext);

  console.log(kartsList);
  
  return (
    <List>
      {(filtredList ? filtredList : kartsList)?.map((kart) => {
        console.log(kart);
        
        return <Cards key={kart.id} kart={kart}></Cards>;
      })}
    </List>
  );
}

export default CardList;
