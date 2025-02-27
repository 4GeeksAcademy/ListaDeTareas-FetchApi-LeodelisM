import React from "react";

//Esta función se ejecuta cada vez que se escribe en el input

const Formulario = (props) => {

    return (
        <div className="card mb-4 col-md-6 mb-3 m-auto">
            <div className="card-body m-auto">
                <h2 className="card-title">Mi nueva tarea</h2>
                <form onSubmit={props.escribirTarea}>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={props.valorInput}
                            onChange={props.cambio}
                            placeholder="Ej: Estudiar React"
                        />
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Añadir Tarea
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Formulario;