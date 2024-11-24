// src/hooks/useContador.ts
import { useState } from "react";

export const useContador = () => {
  const [count, setCount] = useState<number>(0);

  const cambiaContador = (accion: "incrementa" | "decrementa") => {
    setCount((prevCount) =>
      accion === "incrementa" ? prevCount + 1 : prevCount - 1
    );
  };

  return { count, cambiaContador };
};
