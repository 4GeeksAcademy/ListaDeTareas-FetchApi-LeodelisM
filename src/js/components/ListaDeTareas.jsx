import React from "react";
import { AiFillSmile } from "react-icons/ai";

const ListaDeTareas = (props) => {
    console.log("tareas", props.tareas);
    if ((props.tareas || []).length === 0) {
        return <div className="card col-md-6 mb-3 m-auto">
            <div className="card">
                <div className="card-body text-muted">
                    <span className="text-black fs-5 text">Haz hecho todas tus tareas!!!</span>
                    <AiFillSmile
                        className="text-warning"
                        size={40}
                    />
                </div>
            </div>
        </div>
    }

    return (
        <div className="container mt-4 p-0">
            <div className="col-6 d-flex flex-column mb-3 m-auto">
                {(props.tareas || []).map((tarea) => (
                    <div key={tarea.id} className="card mb-3 p-0">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div className={`card-text ${tarea.is_done ? "text-decoration-line-through" : ""}`}>
                                {tarea.label}<br /><small>{tarea.id}</small>
                            </div>
                            <div className = "btn-group gap-1">
                                {tarea.is_done ? 
                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={() => props.cambiarEstado(tarea.id, false)}
                                >
                                    Reactivar
                                </button> : <button
                                    className="btn btn-success btn-sm"
                                    onClick={() => props.cambiarEstado(tarea.id, true)}
                                >
                                    Completar
                                </button>}

                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => props.eliminar(tarea.id)}
                            >
                                Eliminar
                            </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaDeTareas;

