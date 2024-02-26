import React from 'react';
import LineBlue from './../../../assets/line-style/color-blue.png';

import './clientes-style.css'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import GrupoBRESCIANE from './../../../assets/logo-clientes/GrupoBRESCIANE.png';
import GrupoCombustran from './../../../assets/logo-clientes/GrupoCombustran.png';
import LogoLiquida from './../../../assets/logo-clientes/logo-liquida-piso.png';
import Macedo from './../../../assets/logo-clientes/macedo.png';
import Petroserv from './../../../assets/logo-clientes/petroserv.png';

import Carboroil from './../../../assets/logo-clientes/carboroil.png';
import RBL from './../../../assets/logo-clientes/rbl.png';
import Requinte from './../../../assets/logo-clientes/requinte.png';
import Ret from './../../../assets/logo-clientes/ret.jpeg';
import SandroSucatas from './../../../assets/logo-clientes/sandro_sucatas.png';
import VeraLucia from './../../../assets/logo-clientes/vera_lucia.png';
import Guararema from './../../../assets/logo-clientes/guararema.png';
import Wasco from './../../../assets/logo-clientes/wasco.png';
import brida from './../../../assets/logo-clientes/brida.png';
import cruzoleo from './../../../assets/logo-clientes/cruzoleo.png';
import passatec from './../../../assets/logo-clientes/passatec.png';
import petrocamp from './../../../assets/logo-clientes/petrocamp.png';
import petrovale from './../../../assets/logo-clientes/petrovale.png';
import plasmodia from './../../../assets/logo-clientes/plasmodia.png';
import superDiesel from './../../../assets/logo-clientes/super_diesel.png';
import jacarei from './../../../assets/logo-clientes/jacarei.png';
import clariant from './../../../assets/logo-clientes/clariant.png';

import Calfran from './../../../assets/logo-clientes/calfran.png';
import ColegioMiguel from './../../../assets/logo-clientes/ColegioMiguel.png';
import Esax from './../../../assets/logo-clientes/esax.png';
import Grigolletto from './../../../assets/logo-clientes/grigolletto.png';
import LogoClimatize from './../../../assets/logo-clientes/logo-climatize-1.png';
import LogoPatriani from './../../../assets/logo-clientes/logo-patriani.png';
import Sto from './../../../assets/logo-clientes/sto.png';
import Tobema from './../../../assets/logo-clientes/tobema.png';
import Vconnect from './../../../assets/logo-clientes/vconnect.png';
import Veran from './../../../assets/logo-clientes/veran.png';
import Metro from './../../../assets/logo-clientes/metro.png';
import Semae from './../../../assets/logo-clientes/logo-semae.png';

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
                    <img src={GrupoBRESCIANE} alt="Grupo BRESCIANE" className='img-logo-cliente-carrossel' />
                    <img src={GrupoCombustran} alt="Grupo Combustran" className='img-logo-cliente-carrossel' />
                    <img src={LogoLiquida} alt="Logo Liquida" className='img-logo-cliente-carrossel' />

                </div>

                <div className="box-carrossel-clientes">
                    <img src={Macedo} alt="Macedo" className='img-logo-cliente-carrossel' />
                    <img src={Petroserv} alt="Petroserv" className='img-logo-cliente-carrossel petroserv-bg ' />
                    <img src={Carboroil} alt="Petroserv" className='img-logo-cliente-carrossel' />

                </div>

                <div className="box-carrossel-clientes">
                    
                    <img src={RBL} alt="RBL" className='img-logo-cliente-carrossel' />
                    <img src={Requinte} alt="Requinte" className='img-logo-cliente-carrossel' />
                    <img src={Ret} alt="RET" className='img-logo-cliente-carrossel' />

                </div>

                <div className="box-carrossel-clientes">

                    <img src={SandroSucatas} alt="Sandro Sucatas" className='img-logo-cliente-carrossel' />
                    <img src={VeraLucia} alt="Vera Lucia" className='img-logo-cliente-carrossel' />
                    <img src={Guararema} alt="Guararema" className='img-logo-cliente-carrossel' />

                </div>

                <div className="box-carrossel-clientes">

                    <img src={Wasco} alt="Wasco" className='img-logo-cliente-carrossel' />
                    <img src={brida} alt="brida" className='img-logo-cliente-carrossel' />
                    <img src={cruzoleo} alt="Cruzoleo" className='img-logo-cliente-carrossel' />

                </div>

                <div className="box-carrossel-clientes">

                    <img src={passatec} alt="Passatec" className='img-logo-cliente-carrossel' />
                    <img src={petrocamp} alt="Petrocamp" className='img-logo-cliente-carrossel' />
                    <img src={petrovale} alt="Petrovale" className='img-logo-cliente-carrossel' />

                </div>

                <div className="box-carrossel-clientes">

                    <img src={plasmodia} alt="Plasmodia" className='img-logo-cliente-carrossel' />
                    <img src={superDiesel} alt="Super Diesel" className='img-logo-cliente-carrossel' />
                    <img src={jacarei} alt="Camara de Jacarei" className='img-logo-cliente-carrossel' />

                </div>

                <div className="box-carrossel-clientes">

                    <img src={clariant} alt="Clariant" className='img-logo-clariant-carrossel' />

                </div>

            </Carousel>
            
        </main>
    );
}
