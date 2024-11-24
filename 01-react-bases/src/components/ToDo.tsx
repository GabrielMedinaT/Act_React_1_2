import React, { useState } from 'react';
import './ToDo.css'; // Importamos el archivo CSS para estilos personalizados

// Definimos una interfaz para las tareas
interface Task {
  id: number; // Identificador único de la tarea
  text: string; // Texto descriptivo de la tarea
}

// Componente principal ToDo
export const ToDo: React.FC = () => {
  // Estado para la lista de tareas, inicialmente vacío
  const [tasks, setTasks] = useState<Task[]>([]);

  // Estado para almacenar el valor del input de nueva tarea
  const [newTask, setNewTask] = useState<string>('');

  // Función para agregar una nueva tarea
  const addTask = (): void => {
    // Validación: no agregar si el input está vacío
    if (newTask.trim() === '') return;

    // Creación de una nueva tarea
    const task: Task = {
      id: tasks.length + 1, // El ID será el tamaño actual del array + 1
      text: newTask, // Texto tomado del input
    };

    // Actualizamos el estado de las tareas con la nueva tarea agregada
    setTasks([...tasks, task]);

    // Limpiamos el input para una nueva entrada
    setNewTask('');
  };

  // Función para eliminar una tarea por su ID
  const deleteTask = (id: number): void => {
    // Filtramos las tareas, excluyendo la tarea con el ID seleccionado
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Retorno del componente
  return (
    <div className="todo-container">
      {/* Título del gestor */}
      <h1 className="todo-title">Gestor de Tareas</h1>

      {/* Sección de entrada para agregar nuevas tareas */}
      <div className="todo-input-container">
        <input
          type="text" // Tipo de input
          placeholder="Escribe una tarea" // Texto de ayuda en el input
          value={newTask} // Vinculación con el estado de nueva tarea
          onChange={(e) => setNewTask(e.target.value)} // Actualización del estado al escribir
          className="todo-input" // Clase CSS para estilos
        />
        <button onClick={addTask} className="todo-add-button">
          Agregar Tarea
        </button>
      </div>

      {/* Lista de tareas */}
      <ul className="todo-list">
        {tasks.map((task) => (
          // Cada tarea será un elemento <li> único
          <li key={task.id} className="todo-item">
            <span className="todo-id">{task.id}.</span> {/* Mostramos el ID */}
            <span className="todo-text">{task.text}</span> {/* Mostramos el texto */}
            <button
              onClick={() => deleteTask(task.id)} // Al hacer clic se elimina la tarea
              className="todo-delete-button"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
