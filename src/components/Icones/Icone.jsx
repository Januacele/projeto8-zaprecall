import acerto from '../../assets/Images/Checkmark-icon.png';
import erro from '../../assets/Images/Close-icon.png';
import duvida from '../../assets/Images/Help-icon.png';


export default function Icone(props) {

    const icones = {
        acerto: <img src={acerto} alt='acerto'></img>,
        erro: <img src={erro} alt='erro'></img>,
        duvida: <img src={duvida} alt='duvida'></img>
    }

    const { icone } = props
    return <span>{icones[icone]}</span>
}

