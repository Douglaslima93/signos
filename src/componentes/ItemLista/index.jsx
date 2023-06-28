import React from "react";
import "./style.css"

export default function ItemLista() {
    return(
        <div className="boxsigno">
            <div className="nomeSigno">
                Aquario
            </div>

            <img className="imagemSigno" src="../img/aquario.jpg" alt="Aquario"/>

            <div className="periododeNascimento">
                21/01 - 19/02
            </div>
        </div>
    )
}