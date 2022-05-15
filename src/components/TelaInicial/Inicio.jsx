
import {useState} from 'react';
import logo from '../../assets/Images/logo.png';
import './styleInicio.css'


export default function Inicio () {

    const [clicked, setClicked] = useState(false); 
    if (clicked){
        return (
            <div className='inicio'>
                <img src= {logo} alt="ZapRecall" />
                <h1> ZapRecall </h1>
                <button onClick = {() => setClicked(false)}> Iniciar Recall! </button>               
            </div>           
       )
    }

    else return <></>
}
        





