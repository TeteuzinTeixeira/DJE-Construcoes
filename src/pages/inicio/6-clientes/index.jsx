import React from 'react';
import LineBlue from './../../../assets/line-style/color-blue.png';

import './clientes-style.css'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import adn from './../../../assets/logo-clientes/adn.jpg';
import hm from './../../../assets/logo-clientes/hm.png';
import mondec from './../../../assets/logo-clientes/mondec.jpg';
import multipla from './../../../assets/logo-clientes/multipla.png';
import sousa from './../../../assets/logo-clientes/sousa.png';
import terabase from './../../../assets/logo-clientes/terabase.png';

export default function Clientes() {

    return (
        <main className="clientes">
            <div className="box-title-clientes">
                <h1 className="title-clientes">Nossos Clientes</h1>
                <img src={LineBlue} alt="line" className="line-style" />
            </div>

            <Carousel

                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
                autoPlay={true}
                interval={5000}
                transitionTime={2000}
                stopOnHover={false}
                showIndicators={false}
                showArrows={false}
                className="clientes-carousel"
            >

                <div className="box-carrossel-clientes">
                    <img src={adn} alt="DJE" className='img-logo-cliente-carrossel' />
                    <img src={hm} alt="DJE" className='img-logo-cliente-carrossel' />
                    <img src={mondec} alt="Logo Liquida" className='img-logo-cliente-carrossel' />

                </div>

                <div className="box-carrossel-clientes">
                    <img src={multipla} alt="DJE" className='img-logo-cliente-carrossel' />
                    <img src={sousa} alt="DJE" className='img-logo-cliente-carrossel-sousa' />
                    <img src={terabase} alt="DJE" className='img-logo-cliente-carrossel' />

                </div>

            </Carousel>
            
        </main>
    );
}
