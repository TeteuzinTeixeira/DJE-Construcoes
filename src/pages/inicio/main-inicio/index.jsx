import './inicio-style.css';

import Header from "../../../components/header"
import Footer from '../../../components/footer';

import Carrossel from '../1-carrossel';

import WhatsappFixed from '../../../components/whatsappFixed';
import ServicosInicio from '../2-servicos-inicio';
import VisaoMissao from '../3-visao-e-missao';
import Quantidade from '../4-quantidade';
import Clientes from '../6-clientes';
import Formulario from '../5-formulario';

import imageVerticalAzul from './../../../assets/line-style/color-blue-vertical.png'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Inicio() {
    
    const navigate = useNavigate()
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [navigate]);

    return (
        
        <main className="inicio">

            <Header />

            <Carrossel />

            <ServicosInicio />

            <VisaoMissao />

            <Quantidade />

            <Formulario imageLineVertical={imageVerticalAzul}/>

            <Clientes />

            <Footer/>

            <WhatsappFixed />

        </main>

    )

}