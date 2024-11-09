import "./App.css";
import { BasicTypes } from "./typescript";
import { useLanguaje } from "./hook";

function App() {
  const { languaje, cambiaLanguaje } = useLanguaje();

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

 /*
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
  */
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

      
      <p>{usuario1.nombre}</p>
      <BasicTypes />
    </>
  );
}

export default App;
