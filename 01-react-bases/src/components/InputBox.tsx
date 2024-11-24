import { useForm } from "react-hook-form";

interface InputBoxProps {
  onNameSubmit: (name: string) => void;
}

export const InputBox = ({ onNameSubmit }: InputBoxProps) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: { nombre: string }) => {
    onNameSubmit(data.nombre);
  };


  return (
    <div className="input">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" {...register("nombre")} />
        <button type="submit">Refrescar</button>
      </form>
    </div>
  );
};
