"use client";

import { FormElementInstance } from "@/components/form/FormElements";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type DesignerContextType = {
  elements: FormElementInstance[];
  addElement: (index: number, element: FormElementInstance) => void;
  removeElement: (id: string) => void;
  selectedElement: FormElementInstance | null;
  setSelectedElement: Dispatch<SetStateAction<FormElementInstance | null>>;
};

export const DesignerContext = createContext<DesignerContextType | null>(null);

const DesignerContextProvider = ({ children }: { children: ReactNode }) => {
  const [elements, setElements] = useState<FormElementInstance[]>([]);
  const [selectedElement, setSelectedElement] = useState<FormElementInstance | null>(null);

  const addElement = (index: number, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  const removeElement = (id: string) => {
    console.log("called");
    // setElements((prevElement) => prevElement.filter((el) => el.id !== id));
    setElements((prev) => prev.filter((element) => element.id !== id));
    console.log("objs", { id, elements });
  };

  return (
    <DesignerContext.Provider
      value={{
        elements,
        addElement,
        removeElement,
        selectedElement,
        setSelectedElement,
      }}
    >
      {children}
    </DesignerContext.Provider>
  );
};

export default DesignerContextProvider;
