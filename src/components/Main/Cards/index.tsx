import React, { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";
import { IKarts } from "../../../data";
import { CardTag } from "./style";

interface IKart{
  kart: IKarts;
}

function Cards({ kart }: IKart) {
  const { moreInfoKart } = useContext(ModalContext);

  return (
    <CardTag key={kart.id}>
      <img src={kart.image} alt={kart.name} />
      <h4>{kart.type}</h4>
      <h3>{kart.name}</h3>
      <span>R$ {kart.price}</span>
      <button onClick={() => moreInfoKart(kart)}>Mais informações</button>
    </CardTag>
  );
}

export default Cards;
