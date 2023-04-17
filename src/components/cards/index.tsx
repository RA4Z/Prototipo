import { useState, useEffect } from 'react';
import './style.css';

function Card(props) {

  const PBI = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg'
  const GIT = 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
  const Figma = 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
  const SAP = 'https://cdn.cdnlogo.com/logos/s/30/sap-bi.svg'
  
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
    <div className="card" onClick={props.onClick}>
      <div className="titulo">{props.texto}</div>
      <img className="icone" src={imagemSRC} style={{...iconeStyle, opacity: iconeOpacity}}/>
      {/* Conteúdo do card aqui */}
    </div>
  );
}

export default Card;