import Header from "../../../components/header";

import MapsCompany from "../../../components/maps";
import Footer from "../../../components/footer";
import WhatsappFixed from "../../../components/whatsappFixed";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


import './../servicos-single-style.css';

import AnimationSaudeOcupacional from "../components-servicos/c-saude-ocupacional";

export default function SaudeOcupacional() {

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [navigate]);

    
    return (
        <main className="servicos-single">

            <Header />

            <div className="container-servicos-single">

                <div className="box-servicos" data-aos="fade-right" data-aos-duration='2000'>

                    <h1 className="title-servicos">
                        Saúde Ocupacional
                    </h1>

                    <ul className="list-servicos">
                        <li>Saúde Ocupacional;</li>
                        <li>PCMSO;</li>
                        <li>Exame Admissional;</li>
                        <li>Exame Periódico;</li>
                        <li>Exame Demissional;</li>
                        <li>Exame de Retorno ao Trabalho;</li>
                        <li>Exame de Mudança de Cargo;</li>
                        <li>Exames Complementares;</li>
                        <li>Perícias Médicas;</li>
                        <li>eSocial (S-2220);</li>
                        <li>Norma Regulamentadora (NR-07);</li>
                        <li>Outros...</li>
                    </ul>

                </div>

                <AnimationSaudeOcupacional/>

            </div>

            <Footer />

            <WhatsappFixed />



        </main>
    )
}