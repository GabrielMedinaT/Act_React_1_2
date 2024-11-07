import { useState } from "react";
import "./App.css";
import { BasicTypes } from "./typescript";

function App() {
  const [count, setCount] = useState(0);
  const [languaje, setLanguaje] = useState("Es");
  const cambiaContador = (accion: "incrementa" | "decrementa") => {
    if (accion === "incrementa") {
      setCount(count + 1);
    } else if (accion === "decrementa") {
      setCount(count - 1);
    }
  };
  const cambiaLanguaje = () => {
    setLanguaje(languaje === "Es" ? "In" : "Es");
  };
  const nombre: string = "Gabriel";
  interface Persona {
    nombre: string;
    edad: number;
  }

  const persona: Persona = {
    nombre: "Gabriel",
    edad: 25,
  };
  interface Detalles {
    direccion: string;
    telefono: string;
  }

  interface Usuario {
    nombre: string;
    edad: number;
    activo: boolean;
    email?: string;
    detalles: Detalles;
  }

  const usuario1: Usuario = {
    nombre: "Juan",
    edad: 30,
    activo: true,
    detalles: {
      direccion: "Calle Falsa 123",
      telefono: "555-1234",
    },
  };

  const usuario2: Usuario = {
    nombre: "Maria",
    edad: 28,
    activo: false,
    email: "maria@example.com",
    detalles: {
      direccion: "Avenida Siempre Viva 742",
      telefono: "555-5678",
    },
  };
  //console.log(languaje);

  return (
    <>
      <button onClick={cambiaLanguaje}>
        {languaje == "Es" ? "Español" : "Ingles"}
      </button>
      <h1>
        {languaje == "Es"
          ? "Hola Soy " + persona.nombre
          : " Hello  I'am " + nombre}
      </h1>
      <button onClick={() => cambiaContador("decrementa")}>
        {languaje == "Es" ? "Uno menos " : "One less "}
      </button>
      <button onClick={() => cambiaContador("incrementa")}>
        {languaje == "Es" ? "Uno mas" : "One more"}
      </button>
      <p>{count}</p>
      <p>{usuario1.nombre}</p>
      <BasicTypes />
    </>
  );
}

export default App;
