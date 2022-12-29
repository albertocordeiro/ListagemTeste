import React from "react";

export default (props) => {
    const numale = parseInt((Math.random() * (props.max - props.min) + props.min));
    return (
        <div>
            <p>O Valor Minimo: <strong> {props.min} </strong>  </p>
            <p>O Valor Maximo: <strong> {props.max} </strong>  </p>
            <p> O Numero Aleatorio é <strong> {numale} </strong> </p>
        </div>
    )
}