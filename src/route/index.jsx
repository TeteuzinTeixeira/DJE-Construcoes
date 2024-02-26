import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from '../pages/inicio/main-inicio';
import Contato from '../pages/contato/main-contato'
import Servicos from '../pages/servicos/main-servicos';
import EngenhariaSeguranca from '../pages/servicos/1-engenhariaseguranca';
import SaudeOcupacional from '../pages/servicos/2-saudeocupacional';
import Treinamentos from '../pages/servicos/3-treinamentos';
import CursoBombeiroCivil from '../pages/servicos/4-cursoBombeiroCivil';
import MeioAmbiente from '../pages/servicos/5-meioAmbiente';

// import NotFound from '../notFound';

export default function AppRoute() {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Inicio />} />

                <Route path="/servicos" element={<Servicos />} />
                <Route path="/engenharia-de-seguranca" element={<EngenhariaSeguranca />} />
                <Route path="/saude-ocupacional" element={<SaudeOcupacional />} />
                <Route path="/treinamentos" element={<Treinamentos />} />
                <Route path="/curso-de-bombeiro-civil" element={<CursoBombeiroCivil/>} />
                <Route path="/meio-ambiente" element={< MeioAmbiente/>} />

                <Route path="/contato" element={<Contato />} />
                
            </Routes>
        </Router>
    )
}