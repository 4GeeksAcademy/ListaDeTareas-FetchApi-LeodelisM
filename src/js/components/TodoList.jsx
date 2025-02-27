import React, { useEffect, useState } from "react";
import Formulario from "./FormularioTarea";
import ListaDeTareas from "./ListaDeTareas";

const USUARIO = "leodelis";
const API_URL = `https://playground.4geeks.com/todo`;

const TodoList = () => {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Metodo GET

    useEffect(() => {
        renderizarTareas();
    }, []);

    const renderizarTareas = async () => {
        setLoading(true);

        try {

            const tareas = await obtenerTareas();
            setTareas(tareas);
            setLoading(false);

        } catch (error) {
            setError(error);
        }
    };

    const obtenerTareas = async () => {
        try {

            const response = await fetch(`${API_URL}/users/${USUARIO}`);

            if (!response.ok) {
                throw new Error("No se pudieron cargar las tareas");
            }

            const data = await response.json();
            console.log("estas son los datos :", data);
            return data.todos;

        } catch (error) {
            setError("Error al cargar las tareas: ");
        }
    };

    // Agregar tarea (Mètodo POST)

    const agregarTarea = async (e) => {
        e.preventDefault();
        //valida la entrada
        const label = nuevaTarea.trim();
        if (label !== "") {
            const objTarea = await guardarTareaEnElAPI(label);  //guarda la tarea en la api y actualiza el estado
            setTareas([...tareas, objTarea]);                   //Actualiza la lista, manteniendo la lista anterior
            setNuevaTarea("");                                  // Limpiar el campo
        }
    };

    // Metodo POST

    const guardarTareaEnElAPI = async (label) => {
        // Objeto con la información de la tarea a guardar (de acuerdo a la API)
        const guardarTareaObj = {
            label: label,           // El texto de la tarea
            is_done: false          // Por defecto, la tarea no está completada
        };

        try {

            const response = await fetch(`${API_URL}/todos/${USUARIO}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(guardarTareaObj)
            });

            if (!response.ok) {
                throw new Error(`Error al crear tarea`);
            }
        
            const data = await response.json();
            return data;

        } catch (error) {
            console.log(error)
        };
    };

    // Actualizar el estado de la tarea => botòn completar/reactivar (Metodo PUT)
    // La funciòn crea una copia para no modificar directamente el arreglo original
    // modificando directamente el arreglo no me funcionaba el cambio 

    const cambiarEstadoTarea = async (id, is_done) => {
        const copiaTareas = tareas.slice();

        const indexTareaAActualizar = copiaTareas.findIndex((tarea) => tarea.id === id);

        const tareaActualizada = {
            ...copiaTareas[indexTareaAActualizar],
            is_done
        };
        copiaTareas[indexTareaAActualizar] = tareaActualizada

        setTareas(copiaTareas);
        await actualizarTareaEnElAPI(tareaActualizada);
    };

    // Metodo PUT

    const actualizarTareaEnElAPI = async (tarea) => {
        try {

            const response = await fetch(`${API_URL}/todos/${tarea.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tarea)
            });

            if (!response.ok) {
                throw new Error(`Error en actualizar tarea`);
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.log(error)
        };
    };

    // Metodo DELETE

    const borrarTareaEnElAPI = async (id) => {
        try {
            const response = await fetch(`${API_URL}/todos/${id}`,
                {
                    method: 'DELETE',
                }
            );

            if (!response.ok) throw new Error('Error al borrar la tarea');

            const tareasActualizadas = (tareas.filter((tarea) => tarea.id !== id));
            setTareas(tareasActualizadas);

        } catch (error) {
            console.log(error)
        }
    };

    const handleChange = (e) => {
        if (e.target.value.length <= 100) {
            setNuevaTarea(e.target.value);
        }
    };

    return (
        <div>
            <Formulario
                escribirTarea={agregarTarea}                // OnSubmit => Valor en el form
                cambio={handleChange}                       // OnChange => Valor en el input
                valorInput={nuevaTarea}                     // Value    => Valor en el input
            />
            {loading && <p>Cargando tareas...</p>}
            {error !== null ? <>{error.message}</> : null}
            <ListaDeTareas
                tareas={tareas}                             // en la ListaDeTareas para hacer el método map/ mensaje de que no hay tareas pendientes
                eliminar={borrarTareaEnElAPI}               // para remover
                cambiarEstado={cambiarEstadoTarea}         // para marcar tarea como completada/reactivar tarea

            />
        </div>
    );
};

export default TodoList;