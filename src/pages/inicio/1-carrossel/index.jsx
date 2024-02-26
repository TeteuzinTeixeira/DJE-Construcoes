import { useState, useEffect } from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './carrossel-style.css';
import BoxCarrossel from '../../../components/box-carrossel'

import ImgOneCarrossel from './../../../assets/carousel/img-carousel_1.png'
import ImgTwoCarrossel from './../../../assets/carousel/img-carousel_1.png'
import ImgThreeCarrossel from './../../../assets/carousel/img-carousel_1.png'

export default function Carrossel() {

    const [viewMobile, setViewMobile] = useState(false)

    useEffect(() => {
        // Função para verificar a largura da tela e atualizar o estado viewMobile
        function checkScreenWidth() {
            if (window.innerWidth <= 525) {
                setViewMobile(false);
            } else {
                setViewMobile(true);
            }
        }

        // Verifique a largura da tela ao carregar a página
        checkScreenWidth();

        // Adicione um ouvinte de redimensionamento para verificar a largura da tela ao redimensionar a janela
        window.addEventListener('resize', checkScreenWidth);

        // Remova o ouvinte de redimensionamento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);


    return (

        <main className="Carrossel">

            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
                autoPlay={true}
                interval={5000}
                transitionTime={viewMobile ? 1000 : false}
                stopOnHover={false}
                showArrows={viewMobile ? true : false}
                className='container-carousel'>

                <BoxCarrossel
                    imageCarrossel={ImgOneCarrossel}
                    titleCarrossel="DJE COSTA Engenharia e Construções"
                    textCarrossel="Explore tudo sobre a DJE Costa e obtenha informações de contato aqui. Venha descobrir mais sobre nossos serviços de segurança do trabalho e solicite um orçamento conosco."
                />

                <BoxCarrossel
                    imageCarrossel={ImgTwoCarrossel}
                    titleCarrossel="Texto 1"
                    textCarrossel="Explore tudo sobre a DJE Costa e obtenha informações de contato aqui. Venha descobrir mais sobre nossos serviços de segurança do trabalho e solicite um orçamento conosco."
                />

                <BoxCarrossel
                    imageCarrossel={ImgThreeCarrossel}
                    titleCarrossel="Texto 2"
                    textCarrossel="Explore tudo sobre a DJE Costa e obtenha informações de contato aqui. Venha descobrir mais sobre nossos serviços de segurança do trabalho e solicite um orçamento conosco."
                />

            </Carousel>

        </main>

    )
}