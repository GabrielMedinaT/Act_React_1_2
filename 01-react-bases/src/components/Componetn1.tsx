import { useLanguaje , useContador  } from "../hook/";



export const  Componetn1 = () => {
  const { languaje } = useLanguaje();
  const { cambiaContador } = useContador()
  
  //const  [ contador , Setcontador ] = useState(0);
  
  return (
    <div>
      <button onClick={() => cambiaContador("decrementa")}>
        {languaje == "Es" ? "Uno menos " : "One less "}
      </button>
      <button onClick={() => cambiaContador("incrementa")}>
        {languaje == "Es" ? "Uno mas" : "One more"}
      </button>
    </div>
  );
};


