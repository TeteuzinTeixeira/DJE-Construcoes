import Header from "../../../components/header";

import Footer from "../../../components/footer";
import WhatsappFixed from "../../../components/whatsappFixed";

import { useEffect, useState  } from "react";
import { useNavigate } from "react-router-dom";

import AnimationTreinamentos from "../components-servicos/c-treinamentos";

export default function Treinamentos() {

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
                        Treinamentos
                    </h1>

                    <ul className="list-servicos">
                        <li>NR-05 (Comissão Interna de Prevenção de Acidentes e de Assédio – CIPA);</li>
                        <li>NR-06 (Equipamentos de Proteção Individual – EPI);</li>
                        <li>NR-10 (Segurança em Instalações e Serviços em Eletricidade);</li>
                        <li>NR-11 (Transporte, Movimentação, Armazenagem e Manuseio de Materiais);</li>
                        <li>NR-12 (Máquinas e Equipamentos);</li>
                        <li>NR-18 (Condições e Meio Ambiente de Trabalho na Indústria da Construção);</li>
                        <li>NR-20 (Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis);</li>
                        <li>NR-23 (Proteção contra Incêndios);</li>
                        <li>NR-33 (Segurança e Saúde no Trabalho em Espaços Confinados);</li>
                        <li>NR-35 (Trabalho em Altura);</li>
                        <li>Outros...</li>
                    </ul>

                </div>

                <AnimationTreinamentos/>

            </div>

            <Footer />

            <WhatsappFixed />



        </main>
    )
}