import React, { createContext, useEffect, useState } from "react";
import { IKarts } from "../data";

interface IChildren {
  children: React.ReactNode;
}

interface IModalContext {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  moreInfos: IKarts | undefined;
  setMoreInfos: React.Dispatch<React.SetStateAction<IKarts | undefined>>;
  moreInfoKart: (kart: IKarts) => void;
  isCloseModal: boolean;
  setIsCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext({} as IModalContext);

const ModalProvider = ({ children }: IChildren) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isCloseModal, setIsCloseModal] = useState<boolean>(false)
  const [moreInfos, setMoreInfos] = useState<IKarts>();

  useEffect(() => {
    let timer: any;
    
    if (isCloseModal) {
      timer = setTimeout(() => {
        setIsModal(false);
      }, 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isCloseModal]);

  useEffect(() => {
    setIsCloseModal(false)
  }, [isModal]);

  const moreInfoKart = (kart: IKarts) => {
    setIsModal(true);
    setMoreInfos(kart);
  };

  return (
    <ModalContext.Provider
      value={{
        isModal,
        setIsModal,
        moreInfos,
        setMoreInfos,
        moreInfoKart,
        isCloseModal,
        setIsCloseModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
