import React, { createContext, useEffect, useState } from "react";
import { IKarts } from "../data";
import { api } from "../data/api";

interface IChildren {
  children: React.ReactNode;
}

interface ISearchContext {
  kartsList: IKarts[] | null;
  setKartsList: React.Dispatch<React.SetStateAction<IKarts[]>>;
  filtredList: IKarts[] | null;
  setFiltredList: React.Dispatch<React.SetStateAction<IKarts[]>>;
  handlerList: (params?: string) => void;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext({} as ISearchContext);

const SearchProvider = ({ children }: IChildren) => {
  const [kartsList, setKartsList] = useState<IKarts[]>([]);
  const [filtredList, setFiltredList] = useState<IKarts[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    try {
      api.get("/karts").then((res) => {
        setKartsList(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    handlerList(search);
  }, [search]);

  useEffect(() => {
    setFiltredList(kartsList)
  }, [kartsList])

  const handlerList = (params = "todos") => {
    if (params === "todos") {
      setFiltredList(kartsList);
    } else if (params !== "todos") {
      setFiltredList(
        kartsList?.filter((kart: IKarts) => {
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

  return (
    <SearchContext.Provider
      value={{
        kartsList,
        setKartsList,
        filtredList,
        setFiltredList,
        handlerList,
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
