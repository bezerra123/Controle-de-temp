/*import React, { useState } from "react";*/
import Item from "./Item/item";
import style from './lista.module.scss'
import { ITarefa } from "../../types/tarefa";

interface props{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaselecionada: ITarefa) => void
}

function Lista({tarefas, selecionaTarefa}: props){
    return (
        <aside className={style.listaTarefas}>


<h2>Estudo do dia</h2>
<ul>
    {tarefas.map((item) => (
      
       <Item 
       selecionaTarefa={selecionaTarefa}
       key={item.id}
      {...item}   />
    ))}
    
</ul>
        </aside>
    )
}

export default Lista;