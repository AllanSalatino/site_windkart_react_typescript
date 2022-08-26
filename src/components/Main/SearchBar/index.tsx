import { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import { Bar, Title } from "./style";

export const SearchBar = () => {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <>
      <Title>Coleção de carros</Title>
      <Bar
        type="text"
        placeholder="Digite a pesquisa aqui..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></Bar>
    </>
  );
};
