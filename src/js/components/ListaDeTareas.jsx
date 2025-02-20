import React from "react";

const ListaDeTareas = (props) => {
    return (
        <div className="container mt-4">
            <div className="row">
                {props.lista.map((tarea, id) => (
                    <div key={id} className="col-md-6 mb-3">
                        <div className="card shadow-sm">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div className="card-text">{tarea}</div>
                                <button 
                                    className="btn btn-danger btn-sm"
                                    onClick={() => props.delete(id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {props.lista.length === 0 && (
                    <div className="col-12 text-center">
                        <div className="card">
                            <div className="card-body text-muted">
                                No hay tareas pendientes
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListaDeTareas;