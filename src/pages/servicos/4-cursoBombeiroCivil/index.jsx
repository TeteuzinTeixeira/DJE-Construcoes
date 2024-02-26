import Header from "../../../components/header";

import MapsCompany from "../../../components/maps";
import Footer from "../../../components/footer";
import WhatsappFixed from "../../../components/whatsappFixed";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AnimationBombeiroCivil from "../components-servicos/c-bombeiro-civil";


export default function CursoBombeiroCivil() {

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
                        Curso de Bombeiro Civil
                        <br />
                        <span className='span-title-servicos'>Conteúdo Programático</span>
                    </h1>

                    <ul className="list-servicos">
                        <li>Atividades Operacionais de Bombeiro Civil;</li>
                        <li>Fundamentos da Análise de Risco;</li>
                        <li>EPI e EPR;</li>
                        <li>Primeiros Socorros;</li>
                        <li>Produtos Perigosos;</li>
                        <li>Trabalho em Altura e Espaço Confinado – Prática;</li>
                        <li>Prevenção e Combate a Incêndio;</li>
                        <li>Equipamentos de Combate a Incêndio e Auxiliares;</li>
                        <li>Salvamento Terrestre;</li>
                        <li>Campo Prático;</li>
                        <li>Carga horária: 239 horas;</li>
                    </ul>

                </div>

                <AnimationBombeiroCivil />

            </div>

            <Footer />

            <WhatsappFixed />



        </main>
    )
}