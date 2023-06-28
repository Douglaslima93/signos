import React from "react";
import './style.css'
import Titulo from "../Titulo";
import ItemLista from "../ItemLista"

export default function ListaDeSignos() {
    return(
        <div>
            <Titulo/>
            
            <div className="lista">
                <ItemLista/>
            </div>
        </div>
    )
}