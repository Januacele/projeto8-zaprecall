
import React from 'react-dom';
import Deck from '../Deck/Deck';
import logo from '../../assets/Images/logo.png'
import './styleInicio.css'


export default function Inicio () {

    const [clicked, setClicked] = React.useState(false);

        return (

            <div className='inicio'>
                <img src= {logo} alt="ZapRecall" />
                <h1> ZapRecall </h1>
                <button onClick = {() => setClicked(true)}> Iniciar Recall! </button>
                {!clicked ? (<Inicio />) : (<Deck />)}
            </div>
            
        )
} 
   
        





