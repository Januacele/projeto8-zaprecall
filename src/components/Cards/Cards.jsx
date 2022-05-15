import {useState} from 'react';
import './styleCards.css'
import imagem from '../../assets/Images/Play-icon.png';




export default function Cards (props) {

    const [status, setStatus] = useState({fase: 1, result: ""});
    
    function ContentFase(){
        const {fase, result} = status;
        if (fase === 1){
            return (
                <div className = 
                "card closed" 
                onClick = {() => setStatus ({...status, fase: 2})}>
                    <p> Cards{indice} </p>
                    <img src = {imagem} alt='play question' />
                </div>
            )
        }
    }
    
    
    
    const {front, back, indice, done} = props;
    const content = ContentFase ();
    return (
        <div className="Cards"> 
            {content}
        </div>
    )

}
