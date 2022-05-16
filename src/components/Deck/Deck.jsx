import React from "react";
import "../Deck/styleDeck.css";
import Data from "../../data/Data";
import Cards from "../Cards/Cards";
import logoPequeno from "../../assets/Images/logo-pequeno.png";
import Icone from "../Icones/Icone";

export default function Deck () {

    function montarFlashcards() {

        if (questoes.length === 0) {

            Data.sort((a, b) => Math.random() - 0.5)
            setQuestoes([...Data])
            return <></>

        } else {

            return questoes.map(({ front, back }, index) => {

                return <Cards
                    front={front}
                    back={back}
                    indice={index + 1}
                    key={index}
                    aoFinalizar={resposta => setRespostas([...respostas, resposta])}
                />
            })
        }
    }

    const [questoes, setQuestoes] = React.useState([])
    const [respostas, setRespostas] = React.useState([])

    const Footer = MostrarFooter ();

    function MostrarFooter (){
        let resultado = <></>

        if (respostas.length === questoes.length && questoes.length >0){
            if(!respostas.includes("erro")){
                resultado = (
                    <div className="resultado">
                        <span> <Icone icone = "festinha"/> Parabéns! </span>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                    </div>
                )
            } else {
                resultado = (
                    <div className="resultado">
                        <span> <Icone icone = "triste"/> Putz! </span>
                        <p>Ainda faltam alguns...Mas não desanime!</p>
                    </div>
                )
            }

            return (
                <>
                    {resultado}
                    <p> {respostas.length} / {perguntas.length} CONCLUÍDOS </p>
                    {respostas.map((resposta, index) => <Icone icone = {resposta} key ={index} />)}
                </>
            )
        }
    }

    

    return (
        <div className="DeckScreen">
            <header>
                <img className="logo" src={logoPequeno} alt="ZapRecall" />
                <h1>ZapRecall</h1>
            </header>
            <main>
                {montarFlashcards()}
            </main>
            <footer>
              
            </footer>
        </div>
    )
}