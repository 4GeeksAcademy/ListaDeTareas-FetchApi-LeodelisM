import React, { useState } from "react";
import Input from "./FormularioTarea";
import ListaDeTareas from "./ListaDeTareas";

const TodoList = () => {

    const [lista, setLista] = useState([]);
    const [description, setDescription] = useState("");
    

    const handleChange = (evt) => {
        setDescription(evt.target.value);
    };

    const onSubmitForm = (evt) => {
        evt.preventDefault();
        setLista([...lista, description]);
        setDescription("");

    };

    const deleteDescription = (idx) => {
        let newDescription = [...lista];
        newDescription.splice(idx, 1);
        setLista(newDescription);
    };

    return (
        <div>
            <Input capturarInput={handleChange} valorInput={description} onSubmit={onSubmitForm} />
            <ListaDeTareas lista={lista} delete={deleteDescription} />
        </div>
    );
};

export default TodoList;