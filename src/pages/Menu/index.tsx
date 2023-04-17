import React from 'react';
import TopBar from '../../components/Nav';
import Card from '../../components/cards';
import { Link } from 'react-router-dom';
import './style.css';

function Menu() {

  function navegar(pagina: string) {
    if (pagina === "Figma") {
      window.location.href = "https://www.figma.com/file/ZifOoEBIPSsK5Cwlevs7n4/Untitled?node-id=0-1&t=QzjgcAGTJQkBsmSV-0";
    }
    if (pagina === "Rol") {
      window.location.href = "https://www.myweg.net/irj/portal?NavigationTarget=pcd:portal_content/net.weg.folder.weg/net.weg.bi_new.BI_NEW/net.weg.roles.roles/net.weg.RL_MODELO_ENT_CART_ROL/net.weg.workset.WS_MODELO_ENT_CART_ROL/Q_VFIGL0005_0003";
    }
    if (pagina === "GitHub") {
      window.location.href = "https://github.com/RA4Z";
    }
  }

  return (
    <div className="Menu">
      <TopBar />
      <body className="Menu-body">
        <div className="central">
          <Card texto="Figma" ico="Figma" onClick={() => navegar("Figma")} />
          <Link className="link-no-underline" to="/Indicadores">
            <Card texto="Indicadores Power BI" ico="PBI" onClick={() => navegar("")} />
          </Link>
          <Card texto="Página Rol" ico="SAP" onClick={() => navegar("Rol")} />
          <Card texto="GitHub" ico="GIT" onClick={() => navegar("GitHub")} />
        </div>
      </body>
    </div>
  );
}

export default Menu;
