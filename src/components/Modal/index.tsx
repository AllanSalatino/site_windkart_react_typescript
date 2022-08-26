import React, { useContext } from "react";
import { Description, ModalInfo } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import { ModalContext } from "../../contexts/ModalContext";

function Modal() {
  const {moreInfos, isModal, setIsCloseModal, isCloseModal} = useContext(ModalContext)

  return (
    <>
      {isModal &&
      <ModalInfo isCloseModal={isCloseModal}>
        <div>
          <button onClick={() => setIsCloseModal(true)}>
            <AiFillCloseCircle className="icon"></AiFillCloseCircle>
          </button>
          <img src={moreInfos?.infos.images[0]} alt="" />
          <section>
            <h3>{moreInfos?.name}</h3>
            <span>R$ {moreInfos?.price}</span>
            <h4>Fixa técnica:</h4>
            <Description>
              <div>
                <h4>Tipo:</h4>
                <p>{moreInfos?.infos.description.type}</p>
              </div>
              <div>
                <h4>Material do carro:</h4>
                <p>{moreInfos?.infos.description.carMaterial}</p>
              </div>
              <div>
                <h4>Rodas do carro:</h4>
                <p>{moreInfos?.infos.description.carWheels}</p>
              </div>
              <div>
                <h4>Banco do carro:</h4>
                <p>{moreInfos?.infos.description.carSeat}</p>
              </div>
              <div>
                <h4>Mastro do carro:</h4>
                <p>{moreInfos?.infos.description.carMast}</p>
              </div>
              <div>
                <h4>Material da vela:</h4>
                <p>{moreInfos?.infos.description.sailMaterial}</p>
              </div>

              <div>
                <h4>Medidas do carro:</h4>
                <p>{moreInfos?.infos.description.carMeasurement[0]}</p>
              </div>
              <div>
                <h4>Medidas do carro:</h4>
                <p>{moreInfos?.infos.description.carMeasurement[1]}</p>
              </div>
              <div>
                <h4>Peso do carro:</h4>
                <p>{moreInfos?.infos.description.carWeight}</p>
              </div>
              <div>
                <h4>Peso suportado:</h4>
                <p>{moreInfos?.infos.description.supportedWeight}</p>
              </div>
              <div>
                <h4>Acompanha o carro:</h4>
                <p>{moreInfos?.infos.description.followCar}</p>
              </div>
            </Description>
          </section>
        </div>
      </ModalInfo>
      }
    </>
  );
}

export default Modal;
