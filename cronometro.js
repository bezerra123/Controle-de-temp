import Botao from '../botao/botaoo';
import Relogio from './relogio/relogioo';
import style from './cronometro.module.scss'
import { tempoparasegundos } from '../../common/utils/time';
import {ITarefa} from '../../types/tarefa';
import { useEffect, useState } from 'react';

interface props {
   selecionado: ITarefa | undefined, finalizartarefa: () => void

}


export function Cronometro({selecionado, finalizartarefa}: props) {
   const [tempo, settempo] = useState();

   useEffect(()  => {
if(selecionado?.tempo){
    settempo(tempoparasegundos(selecionado.tempo));
}
   }, [selecionado]);

   function regressiva(contador: Number = 0){
    setTimeout(() => {
if(contador > 0) {
    settempo(contador - 1);
    return regressiva(contador - 1);
}
finalizartarefa();
    }, 1000);
   }
 
    return(
        <>
<div className={style.cronometro}>
    <p className={style.titulo}>escolhe um card e inicie o cronometro</p>
  
   <div className={style.relogioWrapper}><Relogio tempo={tempo} /></div>
    

    <Botao onClick={() => regressiva(tempo)} >
        comecar!
        </Botao>
    </div>
    </>
    )
}

   



/*<div> <p>escolha um card e inicie o cronômetro</p>
       </div>

       <div><Botao> comecar!</Botao></div>*/