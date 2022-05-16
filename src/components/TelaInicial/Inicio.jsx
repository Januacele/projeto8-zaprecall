
import React from 'react';

import logo from '../../assets/Images/logo.png';
import '../TelaInicial/styleInicio.css';

export default function Inicio({changePage}) {


        return (
            <div className="Inicio">
                <img src={logo} alt="ZapRecall" />
                <h1>ZapRecall</h1>
                <button type="button" onClick={changePage}>Iniciar Recall !</button>
            </div>
        )
    
}