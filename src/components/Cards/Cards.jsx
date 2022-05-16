import React from 'react';
import "../../components/Cards/styleCards.css";
import Data from "../../data/Data";
import play from '../../assets/Images/Play-icon.png';
import setinha from '../../assets/Images/setinha.png';


function Cards(props) {

    function montarConteudoEtapa() {

        const { etapa, resultado } = Status;
        if (etapa === 1) {
            return (
                <div
                    className="painel fechado"
                    onClick={() => setStatus({ ...Status, etapa: 2 })}
                >
                    <p>Cards {indice}</p>
                    <img src={play} alt="play deck" />
                </div>
            )
        }

        if (etapa === 2) {
            return (
                <div className="painel aberto">
                    <p>{front}</p>
                    <div className="icone" onClick={() => setStatus({ ...Status, etapa: 3 })}>
                        <img src={setinha} alt="setinha"/>
                    </div>
                </div>
            )
        }

        if (etapa === 3) {
            const botoes = [
                { texto: "Não lembrei", resultado: "erro" },
                { texto: "Quase não lembrei", resultado: "duvida" },
                { texto: "Zap!", resultado: "acerto" }
            ]
            return (
                <div className="painel aberto">
                    <p>{back}</p>
                    <div className="botoes">
                        {
                            botoes.map(({ texto, resultado }) => {
                                return (
                                    <button
                                        key={resultado}
                                        className={resultado}
                                        onClick={() => {
                                            setStatus({ etapa: 4, resultado });
                                            aoFinalizar(resultado);
                                        }}
                                    >
                                        {texto}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }

        if (etapa === 4) {
            return (
                <div className="painel fechado finalizado">
                    <p className={resultado}>Cards{indice}</p>
                    {/*Colocar os ícones de forma dinamica */}
                </div>
            )
        }
    }

    const [Status, setStatus] = React.useState({
        etapa: 1,
        resultado: ""
    });

   
    const { front, back, indice, aoFinalizar } = props;

    const conteudo = montarConteudoEtapa();
    return <div className="Cards">{conteudo}</div>
}

export default Cards;