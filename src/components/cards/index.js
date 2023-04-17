import './style.css';
import PBI from '../../assets/PBI.png'
import GIT from '../../assets/GIT.png'
import Figma from '../../assets/Figma.svg'
import SAP from '../../assets/SAP.png'
import { useState, useEffect } from 'react';

function Card(props) {
  const [iconeOpacity, setIconeOpacity] = useState(1);
  const [imagemSRC, setImagemSRC] = useState("");

  useEffect(() => {
    setIconeOpacity(0);
    if(props.ico === "PBI") {
      setImagemSRC(PBI);
      setIconeOpacity(1);
    } else if(props.ico === "GIT") {
      setImagemSRC(GIT);
      setIconeOpacity(1);
    } else if(props.ico === "Figma") {
      setImagemSRC(Figma);
      setIconeOpacity(1);
    } else if(props.ico === "SAP") {
      setImagemSRC(SAP);
      setIconeOpacity(1);
    }
  }, [props.ico]);

  const iconeStyle = {
    width: props.ico === "SAP" ? "60px" : "30px",
    height: props.ico === "SAP" ? "30px" : "30px"
  };

  return (
    <div className="card" alt="card" onClick={props.onClick}>
      <div className="titulo">{props.texto}</div>
      <img className="icone" src={imagemSRC} style={{...iconeStyle, opacity: iconeOpacity}}/>
      {/* Conteúdo do card aqui */}
    </div>
  );
}

export default Card;
