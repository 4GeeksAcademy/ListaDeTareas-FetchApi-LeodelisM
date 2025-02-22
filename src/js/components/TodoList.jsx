import React, { useState } from "react";
import Formulario from "./FormularioTarea";
import ListaDeTareas from "./ListaDeTareas";

const TodoList = () => {
    // Array para el manejo de las tareas
    const [tareas, setTareas] = useState([]);
    // String vacio para manejo del texto en el input
    const [nuevaTarea, setNuevaTarea] = useState("");
    
    // Agregar tarea
    const agregarTarea = (e) => {
        e.preventDefault();
        if (nuevaTarea.trim() !== "") {  // condición para no enviar una tarea en blanco
            setTareas([...tareas, nuevaTarea]);
            setNuevaTarea("");
        }
    };

    //Eliminar tarea
    const borrarTarea = (id) => {
        const tareasActualizadas = tareas.filter((_, tarea) => tarea !== id);
        setTareas(tareasActualizadas);
    };

    // Cambio de estado con el evento
    const handleChange = (e) => {
        // condición para el texto con 100 carácteres
        if (e.target.value.length <= 100) {
            setNuevaTarea(e.target.value);
        }
    };

    return (
        <div>
            <Formulario
                escribirTarea={agregarTarea} // OnSubmit => Valor en el form
                cambio={handleChange}        // OnChange => Valor en el input
                valorInput={nuevaTarea}      // Value    => Valor en el input
            />   
            <ListaDeTareas 
                tareas={tareas}              // en la ListaDeTareas para hacer el método map/ mensaje de que no hay tareas pendientes
                eliminar={borrarTarea}      // onClick
            />    
        </div>
    );
};

export default TodoList;