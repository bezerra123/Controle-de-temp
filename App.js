
import React, { useState } from "react";
import { Cronometro } from "../cronometro/cronometro";
/*import Botao  from "./componenentes/botao/botaoo";*/
import Formulario from "../formulario/formularioo";
import Lista from "../lista/listaa";
import style from './app.module.scss'
import { ITarefa } from "../../types/tarefa";



function App() { 
  
    const [tarefas, setTarefas] = useState([]);
const [selecionado, setSelecionado] = useState();

function selecionaTarefa(tarefaselecionada: ITarefa){
setSelecionado(tarefaselecionada);
setTarefas(tarefasanteriores => tarefasanteriores.map(tarefa => ({
  ...tarefa, 
  selecionado:tarefa.id === tarefaselecionada.id ? true : false
})));
}

function finalizartarefa() {
  if(selecionado) {
    setSelecionado(undefined)
    setTarefas(tarefasanteriores => tarefasanteriores.map(tarefa => {
      if(tarefa.id === selecionado.id) {
        return{
          ...tarefa,
          selecionado: false,
          completado: true
          
        }
      }
      return tarefa;
    }))
  }
}

  return (
    <div className={style.AppStyle}>
    <Formulario setTarefas={setTarefas} />
    <Lista tarefas={tarefas}
    selecionaTarefa={selecionaTarefa}/>
    <Cronometro selecionado={selecionado} finalizartarefa={finalizartarefa}/>

    </div>
  );
}

export default App;
