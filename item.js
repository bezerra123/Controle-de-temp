import React from "react";
import style from '../Item/item.module.scss'
import { ITarefa } from "../../../types/tarefa";

interface props extends ITarefa{
    selecionaTarefa: (tarefaselecionada: ITarefa) => void
}
export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}:props) {
  
    return(
        <li  className={`${style.item} ${selecionado ? style.itemSelecionado: ''} ${completado ? style.itemCompletado : ''}`} onClick= {() => !completado && selecionaTarefa({
            tarefa, tempo, selecionado, completado, id
        })}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
        {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
    </li>  
    )
}