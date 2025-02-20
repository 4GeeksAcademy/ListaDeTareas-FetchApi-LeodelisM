import React from "react";

//Esta función se ejecuta cada vez que se escribe en el input

const Input = (props) => {

    return (

        <div className="card mb-4">
            <div className="card-body">
                <h2 className="card-title">Escribe tu nueva tarea</h2>
                <form onSubmit={props.onSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={props.valorInput}
                            onChange={props.capturarInput}
                            placeholder="Ej: Estudiar React"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Añadir Tarea
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Input;