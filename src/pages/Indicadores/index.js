import TopBar from '../../components/Nav'
import Card from '../../components/cards'
import PowerBI from '../../components/powerbi'
import './style.css';

function Indicadores() {

  function AbrirPowerBI(link){
    const power = document.querySelector('.Power');
    power.classList.add('ativo');
    
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('ativo');
  
    const iframe = document.querySelector('.LayoutBI');
    iframe.src = link;
  }

  function FecharPowerBI() {
    const power = document.querySelector('.Power');
    const overlay = document.querySelector('.overlay');
    power.classList.add('fechando');
    overlay.classList.add('fechando');
    setTimeout(() => {
      power.classList.remove('ativo', 'fechando');
      overlay.classList.remove('ativo', 'fechando');
    }, 1000);
  }

  return (
    <div className="Menu">
    <div className="overlay" onClick={FecharPowerBI}/>
    <TopBar />
      <body className="Menu-body">
        <PowerBI/>
        <div className="central">

          <Card texto="Média de Dias em Estoque" ico="PBI" target="PowerBI" 
          onClick={() => AbrirPowerBI("https://app.powerbi.com/view?r=eyJrIjoiNTZhN2QzNTYtZGEzMS00MjE5LWFlZWMtMTYzNjA1NTM3YmE0IiwidCI6Ijg4NjY2NmE2LWE4ZDItNDYwNC1hMDAyLTk1YjYyMmNiN2UxOCIsImMiOjR9")} />

          <Card texto="Kanban Eletrônico" ico="PBI" target="PowerBI" 
          onClick={() => AbrirPowerBI("https://app.powerbi.com/view?r=eyJrIjoiOTc4NDA5ZjktYjk4ZC00NDA4LWI1MjQtMGRjMDhjOGRkMjQxIiwidCI6Ijg4NjY2NmE2LWE4ZDItNDYwNC1hMDAyLTk1YjYyMmNiN2UxOCIsImMiOjR9")} />
        
          <Card texto="CRP JGS" ico="PBI" target="PowerBI" 
            onClick={() => AbrirPowerBI("https://app.powerbi.com/view?r=eyJrIjoiZGMzNzdiMDctMjY4Mi00MTE3LWEzYmMtZDlkYjVlMGJkMWJlIiwidCI6Ijg4NjY2NmE2LWE4ZDItNDYwNC1hMDAyLTk1YjYyMmNiN2UxOCIsImMiOjR9")} />
        
          <Card texto="Materiais GTA" ico="PBI" target="PowerBI" 
            onClick={() => AbrirPowerBI("https://app.powerbi.com/view?r=eyJrIjoiNzRiODhlNjYtZDQyNi00MDU0LTk2ZTItZWM2ZWYyNmNiYWUxIiwidCI6Ijg4NjY2NmE2LWE4ZDItNDYwNC1hMDAyLTk1YjYyMmNiN2UxOCIsImMiOjR9")} />
        
          <Card texto="Kanban de Turbinas" ico="PBI" target="PowerBI" 
            onClick={() => AbrirPowerBI("https://app.powerbi.com/view?r=eyJrIjoiNjc2NWIzZWMtM2Q0Ni00NGIxLTkyZmUtNWY4NTFkODY4ZGZiIiwidCI6Ijg4NjY2NmE2LWE4ZDItNDYwNC1hMDAyLTk1YjYyMmNiN2UxOCIsImMiOjR9")} />
        
          <Card texto="Nordex" ico="PBI" target="PowerBI" 
            onClick={() => AbrirPowerBI("https://app.powerbi.com/view?r=eyJrIjoiMTIxMGIxMzktMzQzZS00NzUxLTk1OGQtNDE2ZmFiMjJlYmZjIiwidCI6Ijg4NjY2NmE2LWE4ZDItNDYwNC1hMDAyLTk1YjYyMmNiN2UxOCIsImMiOjR9")} />
          
          <Card texto="Planejamento" ico="PBI" target="PowerBI" 
            onClick={() => AbrirPowerBI("https://app.powerbi.com/view?r=eyJrIjoiM2RlYTA5NDktMjQ3ZS00MGMzLTk3OWEtODNmMTEwOTY1OTQ4IiwidCI6Ijg4NjY2NmE2LWE4ZDItNDYwNC1hMDAyLTk1YjYyMmNiN2UxOCIsImMiOjR9")} />
          
          <Card texto="Programação" ico="PBI" target="PowerBI" 
            onClick={() => AbrirPowerBI("https://app.powerbi.com/view?r=eyJrIjoiMGNhZDE1NmEtMjBiMC00NjIyLTg4MTAtMDFkZTgyZTZlZTNkIiwidCI6Ijg4NjY2NmE2LWE4ZDItNDYwNC1hMDAyLTk1YjYyMmNiN2UxOCIsImMiOjR9")} />
          
          <Card texto="Dados Mestre & WF" ico="PBI" target="PowerBI" 
            onClick={() => AbrirPowerBI("https://app.powerbi.com/view?r=eyJrIjoiMTI0ODBmMzItOTFkMy00ODE1LTg1YTQtY2UyOWE4MWNjZmY3IiwidCI6Ijg4NjY2NmE2LWE4ZDItNDYwNC1hMDAyLTk1YjYyMmNiN2UxOCIsImMiOjR9")} />
          
          <Card texto="Cadeia de Ajuda" ico="PBI" target="PowerBI" 
            onClick={() => AbrirPowerBI("https://app.powerbi.com/view?r=eyJrIjoiYmFlOTA0OGItNDIzYS00Y2YwLWE3MDAtODRlOTQ4MDk2NDJlIiwidCI6Ijg4NjY2NmE2LWE4ZDItNDYwNC1hMDAyLTk1YjYyMmNiN2UxOCIsImMiOjR9")} />
          
          <Card texto="Equipe de Apoio" ico="PBI" target="PowerBI" 
            onClick={() => AbrirPowerBI("https://app.powerbi.com/view?r=eyJrIjoiNTA4OGYwMmUtOTU0Mi00YzQ1LWE5ZTMtZGEyMjY4MzY5YjcwIiwidCI6Ijg4NjY2NmE2LWE4ZDItNDYwNC1hMDAyLTk1YjYyMmNiN2UxOCIsImMiOjR9")} />
        
        </div>

      </body>
    </div>
  );
}

export default Indicadores;