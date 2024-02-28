import './footer-style.css'

import logo from './../../assets/image-footer/LOGO.png'

import locIcon from './../../assets/icons-footer/Localizacao.png'
import telIcon from './../../assets/icons-footer/Telefone.png'
import mailIcon from './../../assets/icons-footer/Mail.png'

import facebookIcon from './../../assets/icons-footer/Facebook.png'
import instagramIcon from './../../assets/icons-footer/Instagram.png'
import linkedinIcon from './../../assets/icons-footer/Linkedin.png'
import { useNavigate } from 'react-router-dom'

export default function Footer() {

    const navigate = useNavigate();

    function TopEffect() {
        window.scrollTo(0, 0);
    }



    return (
        <footer>

            <div className="container-top-footer">

                <div className="container-left-footer">

                    <div className="left-box-footer">

                        <img src={locIcon} alt="" className="left-icons-footer" />
                        <div className="loc-text-box-footer">
                            <a href="" target='blank' className='left-text-footer'>
                            R. Piacatuba, 112 - Parque Industrial, São Paulo - SP, 08110-030
                            </a>

                        </div>

                    </div>

                    <div className="left-box-footer">

                        <img src={telIcon} alt="" className="left-icons-footer" />
                        <a href="" className="left-text-footer" >
                            (12) 99786-1201
                        </a>

                    </div>

                    <div className="left-box-footer">

                        <img src={mailIcon} alt="" className="left-icons-footer" />
                        <a href="mailto:contato@djecostaengenharia.com" className='left-text-footer' >
                            contato@djecostaengenharia.com
                        </a>

                    </div>

                </div>

                <div className="container-central-footer">

                    <a href="" target='blank'>
                        <img src={facebookIcon} className="central-icons-footer" />
                    </a>

                    <a href="" target='blank'>
                        <img src={instagramIcon} className="central-icons-footer" />
                    </a>

                    <a href="" target='blank'>
                        <img src={linkedinIcon} className="central-icons-footer" />
                    </a>

                </div>

                <img src={logo} className="logo-footer" onClick={TopEffect} />

            </div>

            <div className="container-bottom-footer">

                <p className='text-bottom-footer'>© desde 2020, todos os direitos reservados.</p>

                <p className='text-bottom-footer '>Desenvolvido por{" "} <a href="http://astraltech.com.br" target="_blank" className='link-astral-tech'>Astral Tech</a></p>

            </div>

        </footer>
    )
}