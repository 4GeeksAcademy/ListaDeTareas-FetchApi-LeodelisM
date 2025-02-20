import React, { useState } from "react";
import Input from "./FormularioTarea";
import ListaDeTareas from "./ListaDeTareas";

const TodoList = () => {
    // Array para el manejo de las tareas
    const [lista, setLista] = useState([]);
    // String vacio para manejar el texto del input (en este caso texto = escribir/limpiar/borrar tarea = "description" como nombre)
    const [description, setDescription] = useState("");
    

    // Cambio de estado con el evento
    const handleChange = (e) => {
        setDescription(e.target.value);
    };

    // Agregar Tarea
    const onSubmitForm = (e) => {
        e.preventDefault();
        setLista([...lista, description]);
        setDescription("");

    };

    // Eliminar tarea
    const deleteDescription = (id) => {
        let newDescription = [...lista];
        newDescription.splice(id, 1);
        setLista(newDescription)

    };

    return (
        <div>

            <Input capturarInput={handleChange} 
            valorInput={description} 
            onSubmit={onSubmitForm} />

            <ListaDeTareas lista={lista} 
            delete={deleteDescription} />
            
        </div>
    );
};

export default TodoList;