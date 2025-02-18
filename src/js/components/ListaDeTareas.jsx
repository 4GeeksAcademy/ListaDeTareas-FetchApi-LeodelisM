import React from "react";

const ListaDeTareas = (props) => {

    return (
        <>
            {props.lista.map((tarea, idx) => {
                return (
                    <div key={idx} className="d-flex flex-row">
                        <div>{tarea}</div>
                        <div className="ml-2">
                            <a className="btn btn-danger btn-small" onClick={() => props.delete(idx)}
                            >x</a>
                        </div>
                    </div>
                )
            })}
        </>
    );
    
};

export default ListaDeTareas;