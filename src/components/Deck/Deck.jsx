import React from "react";
import "../Deck/styleDeck.css";
import Data from "../../data/Data";
import Cards from "../Cards/Cards";
import logoPequeno from "../../assets/Images/logo-pequeno.png";
import festinha from "../../assets/Images/party.png";
import triste from "../../assets/Images/sad.png";

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