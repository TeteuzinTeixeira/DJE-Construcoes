import './servicos-inicio-style.css'

import BoxServicos from "../../../components/box-servicos";



import ImgCardEngSeguranca from './../../../assets/card-servicos/eng.seguranca.png'
import ImgCardSaudeOcupacional from './../../../assets/card-servicos/saude-ocupacional.png'
import ImgCardTreinamentos from './../../../assets/card-servicos/treinamentos.png'
import ImgCardBombeiro from './../../../assets/card-servicos/bombeiro.png'
import ImgCardMeioAmbiente from './../../../assets/card-servicos/meio-ambiente.png'

import LineBlue from './../../../assets/line-style/color-blue.png'
import Header from '../../../components/header';
import { useNavigate } from 'react-router-dom';

export default function ServicosInicio() {
    
const navigate = useNavigate()

    return (

        <main className="servicos-inicio">

            <div className="box-title-servicos-inicio" data-aos="fade-right" data-aos-duration='2300'>
                <h2 className="title-servicos-inicio" >
                Toda Experiência em Pintura Predial e Construções que sua Empresa Procura, em um <br />
                    <span className='span-title-servicos-inicio'>Único Lugar!</span>
                </h2>

                <img src={LineBlue} alt="" className='line-style' />
            </div>

            <div className="container-servicos-inicio">

                <BoxServicos
                    functionNavigateServicos={() => navigate('/engenharia-de-seguranca') }
                    imageServicos={ImgCardEngSeguranca}
                    titleCardServicos="Pintura"
                    textCardServicos="Sua Escolha em Pinturas Prediais de Excelência. Garantimos a melhor qualidade em cada projeto, proporcionando serviços em grande escala sem comprometer a agilidade. Confie na DJE Costa para elevar a estética dos seus edifícios com maestria."
                />


                <BoxServicos
                    functionNavigateServicos={() => navigate('/saude-ocupacional')}
                    imageServicos={ImgCardSaudeOcupacional}
                    titleCardServicos="Reforma"
                    textCardServicos="Sua Opção em Reformas Residenciais de Qualidade. Asseguramos a excelência em cada projeto, oferecendo serviços abrangentes sem sacrificar a eficiência. Conte com a equipe da Reformas Total para aprimorar a estética de seus espaços."
                />


                <BoxServicos
                    functionNavigateServicos={() => navigate('/treinamentos')}
                    imageServicos={ImgCardTreinamentos}
                    titleCardServicos="Treinados"
                    textCardServicos="Sua Escolha para Reformas Residenciais com Profissionais Treinados. Garantimos qualidade em cada projeto, oferecendo serviços abrangentes sem comprometer a eficiência. Conte com a expertise da equipe Treinamento Pro para elevar a estética de seus espaços."
                />


                <BoxServicos
                    functionNavigateServicos={() => navigate('/curso-de-bombeiro-civil')}
                    imageServicos={ImgCardBombeiro}
                    titleCardServicos="Construção civil"
                    textCardServicos="Sua Opção em Construção Civil de Excelência. Garantimos a mais alta qualidade em cada projeto, oferecendo serviços abrangentes em grande escala sem comprometer a eficiência. Confie na Construções Master para aprimorar a estética de seus empreendimentos com maestria."
                />


                <BoxServicos
                    functionNavigateServicos={() => navigate('/meio-ambiente')}
                    imageServicos={ImgCardMeioAmbiente}
                    titleCardServicos="Meio Ambiente"
                    textCardServicos="Sua Escolha em Construção Sustentável. Garantimos qualidade em cada projeto, com serviços eficientes em grande escala. Confie na EcoConstrução para elevar a estética dos seus edifícios com maestria, priorizando a preservação ambiental."
                />

            </div>

            <div className="box-bottom-link-servicos">
                <button className="button-link-servico" onClick={() => navigate('/servicos')}> Ver Todos</button>
            </div>

        </main>
    )
}