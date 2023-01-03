import React from "react";
import style from './relogio.module.scss'

interface props {
  tempo: Number | undefined
}

export default function Relogio({tempo = 0 }: props) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  const [minutodezena, minutounidade]= String(minutos).padStart(2, '0');
  
  const[segundodezena, segundounida] = String(segundos).padStart(2, '0');
    return(
      <>
        <span className={style.relogioNumero}>{minutodezena}</span>
        <span className={style.relogioNumero}>{minutounidade}</span>
        <span className={style.Divisao}>:</span>
        <span className={style.relogioNumero}>{segundodezena}</span>
        <span className={style.relogioNumero}>{segundounida}</span>
      </>
    )
}