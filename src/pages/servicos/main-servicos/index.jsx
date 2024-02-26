import './servicos-style.css'

import Header from './../../../components/header'
import Footer from './../../../components/footer'
import WhatsappFixed from './../../../components/whatsappFixed'
import MapsCompany from '../../../components/maps';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import imgVerticalBranco from './../../../assets/line-style/color-white.png'

export default function Servicos() {

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [navigate]);


    return (


        <main className="servicos">

            <Header />

            <div className="container-servicos">

                <div className="container-duo-servicos">

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
                            <li>Prevenção de Combate a Incêndio;</li>
                            <li><a href="https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs/normas-regulamentadoras-nrs" target='blank'>Normas Regulamentadoras;</a></li>
                            <li><a href="https://bombeiros.com.br/instrucoes-tecnicas/" target='blank'>Instruções Técnicas;</a></li>
                            <li>Outros....</li>
                        </ul>
                    </div>

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
                </div>

                <div className="container-duo-servicos mid-container-color" >
                    <div className="box-servicos mid-text-color" data-aos="fade-right" data-aos-duration='2000'>
                        <h1 className="title-servicos mid-text-color">
                            Treinamentos
                        </h1>

                        <ul className="list-servicos mid-text-color">
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

                    <div className="box-servicos mid-text-color" data-aos="fade-right" data-aos-duration='2000'> 
                        <h1 className="title-servicos mid-text-color">
                            Curso de Bombeiro Civil
                            <br />
                            <span className='span-title-servicos'>Conteúdo Programático</span>
                        </h1>

                        <ul className="list-servicos mid-text-color">
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


                </div>

                <div className="container-duo-servicos container-duo-final">

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

                    <MapsCompany imgLineVertical={imgVerticalBranco}/>

                </div>

            </div>

            <Footer />

            <WhatsappFixed />

        </main>

    )
}