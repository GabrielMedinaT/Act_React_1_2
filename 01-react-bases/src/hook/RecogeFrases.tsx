import { useState } from "react";
import axios from "axios";


export const useRecogeFrases = () => {
  const [frase, setFrase] = useState<{ frase: string; autor: string }>({
    frase: "",
    autor: "",
  });

  const recogeFrase = async () => {
    try {
      const response = await axios.get(
        "https://frasedeldia.azurewebsites.net/api/phrase"
      );
      setFrase({
        frase: response.data.phrase,
        autor: response.data.author,
      });
    } catch (error) {
      console.error("Error fetching phrase:", error);
    }
  };

  return { frase, recogeFrase, setFrase };
};
