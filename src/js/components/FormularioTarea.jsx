import React from "react";

const Input = (props) => (
    <div>
        <form onSubmit={props.onSubmit}>
            <div className="mb-3">
                <input 
                type="type" 
                className="form-control"
                placeholder="Escribe Tu Nueva Tarea"
                value={props.valorInput}
                onChange={props.capturarInput}
                 />
            </div>
        </form>     
    </div>

);

export default Input;