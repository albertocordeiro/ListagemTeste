import React from "react"
export default function ComParametro(props) {
    const status = props.nota > 7 ? 'Aprovado' : 'Recuperação'
    // arredonda a nota, uma vez que um parametro/prop é um campo read only, então tenho que passar a informação para uma variavel e usar essa variavel
    // math.ceil arredonda 
    const notaarred = Math.ceil(props.nota)
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p> Aluno <strong> {props.aluno} </strong>
                Tem Nota <strong>{notaarred} </strong>
                e sua situação é:
                <strong> {status} </strong>
            </p>
        </div>
    )
}

