import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../botao/botaoo";
import style from './formulario.module.scss'
import {v4 as  uuidv4 } from 'uuid';

interface props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> 
}


function Formulario({setTarefas}: props){
    const [tarefa, setTarefa] = useState("");
    const [tempo, settempo] = useState("00:00")
    function adicionartarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasantigas => [...tarefasantigas, {tarefa, tempo,
        selecionado: false,
        completado: false,
        id: uuidv4()
    
    }]);
       setTarefa("");
       settempo("00:00");
      
    }
    
    return(
        <form className={style.novaTarefa} onSubmit={adicionartarefa}>
        <div className={style.inputContainer}> 
            <label htmlFor="tarefa">
                Adicione um novo estudo
            </label>
            <input type="text"
            name="tarefa" 
            id="tarefa" 
            value={tarefa}
            onChange={evento => setTarefa(evento.target.value)}
            placeholder="o que você quer estuda"
            required/>
            
            </div>
        <div className={style.inputContainer}>   
           <label htmlFor="tempo">
                tempo
                </label>
                <input type="time"
                step="1" 
                 name="tempo"
                 value={tempo}
                 onChange={evento => settempo(evento.target.value)}
                 id="tempo"
                 min="00:00:00"
                max="01:30:00"
                 required
                 /></div>
        <Botao type="submit">Adicionar
            
        </Botao>
       
    </form>
    )
}



export default Formulario;