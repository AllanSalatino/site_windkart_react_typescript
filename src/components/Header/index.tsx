import React, { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { ButtonFilter, HeaderTag, Logo, Tipo } from "./style";

function Header() {
  const {handlerList} = useContext(SearchContext)
  return (
    <HeaderTag>
      <div>
        <Logo>Wind</Logo>
        <Tipo>Kart</Tipo>
      </div>
      <section>
        <ButtonFilter onClick={() =>handlerList()}>Todos</ButtonFilter>
        <ButtonFilter onClick={() =>handlerList("Alumínio")}>Alumínio</ButtonFilter>
        <ButtonFilter onClick={() =>handlerList("Aço-inox")}>Aço-inox</ButtonFilter>
        <ButtonFilter onClick={() =>handlerList("Banco duplo")}>
          Banco duplo
        </ButtonFilter>
      </section>
    </HeaderTag>
  );
}

export default Header;