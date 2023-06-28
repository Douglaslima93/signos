import React from "react";
import './style.css'
import Titulo from "../Titulo";
import ItemLista from "../ItemLista"

export default function ListaDeSignos() {
    return(
        <div>
            <Titulo/>
            
            <div className="lista">

                <ItemLista
                signo="Aquário" dataInicio="21/01"
                dataFim="19/02" imagem="../img/aquario.jpg"/>

                <ItemLista
                signo="Peixes" dataInicio="20/02"
                dataFim="20/03" imagem="../img/peixes.jpg"/>

                
                <ItemLista
                signo="Áries" dataInicio="21/03"
                dataFim="20/04" imagem="../img/aries.jpg"/>

                
                <ItemLista
                signo="Touro" dataInicio="21/04"
                dataFim="21/05" imagem="../img/touro.jpg"/>

                
                <ItemLista
                signo="Gêmeos" dataInicio="22/05"
                dataFim="21/06" imagem="../img/gemeos.jpg"/>

                
                <ItemLista
                signo="Câncer" dataInicio="21/06"
                dataFim="23/07" imagem="../img/cancer.jpg"/>

                
                <ItemLista
                signo="Leão" dataInicio="24/07"
                dataFim="23/08" imagem="../img/leao.jpg"/>

                
                <ItemLista
                signo="Virgem" dataInicio="24/08"
                dataFim="23/09" imagem="../img/virgem.jpg"/>

                
                <ItemLista
                signo="Libra" dataInicio="24/09"
                dataFim="23/10" imagem="../img/libra.jpg"/>

                
                <ItemLista
                signo="Escorpião" dataInicio="24/10"
                dataFim="22/11" imagem="../img/escorpiao.jpg"/>

                
                <ItemLista
                signo="Ságitario" dataInicio="23/11"
                dataFim="21/12" imagem="../img/sagitario.jpg"/>

                
                <ItemLista
                signo="Capricornio" dataInicio="22/12"
                dataFim="20/01" imagem="../img/capricornio.jpg"/>

            </div>
        </div>
    )
}