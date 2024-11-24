import { useState, useEffect } from "react";
import { InputBox } from "./components/InputBox";
import { useRecogeFrases, useLanguaje } from "./hook"; // Importa correctamente el hook
import { ToDo } from "./components/ToDo";

function App() {
  const { languaje, cambiaLanguaje } = useLanguaje();

  const [nombreIngresado, setNombreIngresado] = useState(""); // Estado para almacenar el nombre ingresado
  const { frase, recogeFrase } = useRecogeFrases(); // Usa el hook al inicio del componente
  console.log(languaje);
  const handleNameSubmit = (name: string) => {
    setNombreIngresado(name); // Actualiza el estado con el nombre enviado desde el formulario
  };

  // Usa useEffect para obtener la frase al cargar el componente
  useEffect(() => {
    recogeFrase();
  }, []); // [] asegura que se llama solo una vez, al montar el componente

  console.log(frase.autor);

  return (
    <div className="App">
      <button onClick={cambiaLanguaje}>
        {languaje === "Es" ? "Español" : "Inglés"}
      </button>
      <h1>{languaje === "Es" ? "Mi aplicación" : "My aplicattion"}</h1>
      <InputBox onNameSubmit={handleNameSubmit} />
      <div>
        <p>
          {languaje === "Es"
            ? `Bienvenido ${nombreIngresado}`
            : `Welcome ${nombreIngresado}`}
        </p>
      </div>

      <div>
        {/*Ejercicio 1_5*/}
        <ToDo />
      </div>
    </div>
  );
}

export default App;
