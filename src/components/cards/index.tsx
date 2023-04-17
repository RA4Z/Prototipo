import React, { useState, useEffect } from 'react';
import { Cards, Titulo, Icone } from './style'
import { Overlay } from '../../pages/Indicadores/style';
export const PBI: string = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg';
export const GIT: string = 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg';
export const Figma: string = 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg';
export const SAP: string = 'https://cdn.cdnlogo.com/logos/s/30/sap-bi.svg';

type CardProps = {
  texto: string;
  ico: string;
  onClick?: () => void;
  target?: string;
  PBI?: string
}

const Card: React.FC<CardProps> = (props) => {
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

  function AbrirPowerBI(link? : string){
    if (link !== undefined) {
      const overlay = document.querySelector(Overlay) as HTMLInputElement;
      const power = document.querySelector('.Power') as HTMLInputElement;
      const iframe = document.querySelector('.LayoutBI') as HTMLInputElement;
      overlay.classList.add('ativo'); 
      power.classList.add('ativo');
      iframe.src = link;
    }
  }
  
  function navegar(pagina: string, PBI? : string) {
    if (PBI !== "") {
      AbrirPowerBI(PBI)
    }
    if (pagina === "Figma") {
      window.location.href = "https://www.figma.com/file/ZifOoEBIPSsK5Cwlevs7n4/Untitled?node-id=0-1&t=QzjgcAGTJQkBsmSV-0";
    }
    if (pagina === "Página Rol") {
      window.location.href = "https://www.myweg.net/irj/portal?NavigationTarget=pcd:portal_content/net.weg.folder.weg/net.weg.bi_new.BI_NEW/net.weg.roles.roles/net.weg.RL_MODELO_ENT_CART_ROL/net.weg.workset.WS_MODELO_ENT_CART_ROL/Q_VFIGL0005_0003";
    }
    if (pagina === "GitHub") {
      window.location.href = "https://github.com/RA4Z";
    }
  }

  const iconeStyle = {
    width: props.ico === "SAP" ? "60px" : "30px",
    height: props.ico === "SAP" ? "30px" : "30px"
  };

  return (
    <Cards onClick={() => navegar(props.texto,props.PBI)}>
      <Titulo>{props.texto}</Titulo>
      <Icone alt="Imagem" src={imagemSRC} style={{...iconeStyle, opacity: iconeOpacity}}/>
      {/* Conteúdo do card aqui */}
    </Cards>
  );
}

export default Card;
