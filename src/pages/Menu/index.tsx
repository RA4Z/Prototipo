import React from 'react';
import TopBar from '../../components/Nav';
import Card from '../../components/cards';
import { Link } from 'react-router-dom';
import './style.css';

const Menu: React.FC = () => {

  return (
    <div className="Menu">
      <TopBar />
      <body className="Menu-body">
        <div className="central">
          <Card texto="Figma" ico="Figma"/>
          <Link className="link-no-underline" to="/Indicadores"> <Card texto="Indicadores Power BI" ico="PBI"/> </Link>
          <Card texto="Página Rol" ico="SAP"/>
          <Card texto="GitHub" ico="GIT" />
        </div>
      </body>
    </div>
  );
}

export default Menu;
