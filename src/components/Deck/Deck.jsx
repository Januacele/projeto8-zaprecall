import Data from './../../data/Data';
import logoPequeno from '../../assets/Images/logo-pequeno.png';
import './styleDeck.css';
import Cards from '../Cards/Cards';
import {useState} from 'react';


export default function Deck (){

   function OrganizeCards (){

    const [Questions, setQuestions] = useState([]);
    const [Answers, setAnswers] = useState([]);

    if (Questions.length === 0){
        Data.sort((a,b) => Math.random() - 0.5);
        setQuestions([...Data]);
        return <></>
    }else{
        return Questions.map(({front, back}, index) => {
            return 
            <Cards 
            front = {front}
            back = {back}
            indice = {index +1}
            key = {index}
            done = {answer => setAnswers ([...Answers, answer])}

            />
        })
    }
   }

    return (
        <div className='Deck'>
            <header>
                <img src={logoPequeno} alt="logo-pequeno" />
                <h1>ZapRecall</h1>
            </header>

            <main>
              {OrganizeCards()}
            </main>

            <footer>
                
            </footer>


        </div>
    )
}