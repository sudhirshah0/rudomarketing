"use client";

import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
  isOpen: boolean;
  openModal: (defaultService?: string) => void;
  closeModal: () => void;
  selectedService: string;
}

const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  selectedService: "",
});

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (defaultService: string = "") => {
    setSelectedService(defaultService);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, selectedService }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
