import Header from "../../../components/header";

import Footer from "../../../components/footer";
import WhatsappFixed from "../../../components/whatsappFixed";

import './../servicos-single-style.css';
import AnimationEngSeg from "../components-servicos/c-eng-seg";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function EngenhariaSeguranca() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [navigate]);

    return (
        <main className="servicos-single">

            <Header />

            <div className="container-servicos-single">

                <div className="box-servicos" data-aos="fade-right" data-aos-duration='2000'>

                    <h1 className="title-servicos">
                        Engenharia de Segurança
                    </h1>

                    <ul className="list-servicos">
                        <li>PGR/GRO – Programa de Gerenciamento de Riscos / Gerenciamento de Riscos Ocupacionais;</li>
                        <li>PGR Construção Civil (NR-18);</li>
                        <li>LTCAT - Laudo Técnico das Condições do Ambiente de Trabalho;</li>
                        <li>L.I – Laudo de Insalubridade;</li>
                        <li>L.P – Laudo de Periculosidade;</li>
                        <li>Laudo NR-10 e SPDA;</li>
                        <li>Laudo NR-12;</li>
                        <li>Laudo NR-13 – Vasos de Pressão;</li>
                        <li>Laudo e AET - Análise Ergonômica NR-17;</li>
                        <li>Prontuário NR-20;</li>
                        <li>eSocial (S-2210, S-2220 e S-2240);</li>
                        <li>Perícias Trabalhistas – Insalubridade/Periculosidade;</li>
                        <li>Perícia Grafotécnica</li>
                        <li>Prevenção de Combate a Incêndio;</li>
                        <li><a href="https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs/normas-regulamentadoras-nrs" target="blank">Normas Regulamentadoras;</a></li>
                        <li><a href="https://bombeiros.com.br/instrucoes-tecnicas/" target="blank">Instruções Técnicas;</a></li>
                        <li>Outros....</li>
                    </ul>

                </div>

                <AnimationEngSeg/>

            </div>

            <Footer />

            <WhatsappFixed />



        </main>
    )
}