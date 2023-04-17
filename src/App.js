import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Indicadores from './pages/Indicadores';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Indicadores" element={<Indicadores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
