import React from "react";
import { AiFillSmile } from "react-icons/ai";


const ListaDeTareas = (props) => {
    if (props.tareas.length === 0) {
        return <div className="card col-md-6 mb-3 m-auto">
                    <div className="card">
                        <div className="card-body text-muted">
                            <span className="text-black fs-5 text">No hay tareas pendientes</span>
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
                {props.tareas.map((tarea, id) => (
                    <div key={id} className="card mb-3 p-0">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div className="card-text text-truncate">{tarea}</div>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => props.eliminar(id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaDeTareas;