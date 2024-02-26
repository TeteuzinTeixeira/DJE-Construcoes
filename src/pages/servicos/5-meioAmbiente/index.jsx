import Header from "../../../components/header";
import Footer from "../../../components/footer";
import WhatsappFixed from "../../../components/whatsappFixed";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AnimationMeioAmbiente from "../components-servicos/c-meio-ambiente";



export default function MeioAmbiente() {

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
                        Meio Ambiente
                    </h1>

                    <ul className="list-servicos">
                        <li>L.P – Licença Prévia;</li>
                        <li>L.I – Licença de Instalação;</li>
                        <li>L.O – Licença de Operação;</li>
                        <li>CETESB – Companhia de Tecnologia de Saneamento Ambiental;</li>
                        <li>IBAMA – Instituto Brasileiro do Meio Ambiente;</li>
                        <li>CONAMA – Conselho Nacional do Meio Ambiente;</li>
                        <li>DAIA – Departamento de Avaliação de Impacto Ambiental;</li>
                        <li>Outros...</li>
                    </ul>

                </div>

                <AnimationMeioAmbiente/>

            </div>

            <Footer />

            <WhatsappFixed />



        </main>
    )
}