import React, { createContext, useEffect, useState } from "react";
import { IKarts, karts } from "../data";

interface IChildren {
  children: React.ReactNode;
}

interface ISearchContext {
  filtredList: IKarts[];
  setFiltredList: React.Dispatch<React.SetStateAction<IKarts[]>>;
  handlerList: (params?: string) => void;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext({} as ISearchContext);

const SearchProvider = ({ children }: IChildren) => {
  const [filtredList, setFiltredList] = useState(karts);
  const [search, setSearch] = useState("");

  const handlerList = (params = "todos") => {
    if (params === "todos") {
      setFiltredList(karts);
    } else if (params !== "todos") {
      setFiltredList(
        karts.filter((kart) => {
          return (
            kart.type === params ||
            kart.name
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(
                params
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              ) ||
            kart.type
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(
                params
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              ) ||
            kart.price
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(
                params
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              )
          );
        })
      );
    }
  };

  useEffect(() => {
    handlerList(search);
  }, [search]);

  return (
    <SearchContext.Provider
      value={{ filtredList, setFiltredList, handlerList, search, setSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
