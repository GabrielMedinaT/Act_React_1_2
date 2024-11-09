// src/hooks/useLanguaje.ts
import { useState } from "react";

const useLanguaje = () => {
  const [languaje, setLanguaje] = useState<"Es" | "In">("Es");

  const cambiaLanguaje = () => {
    setLanguaje(languaje === "Es" ? "In" : "Es");
  };

  return { languaje, cambiaLanguaje };
};

export default useLanguaje;
