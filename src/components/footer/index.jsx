import './footer-style.css'

import logo from './../../assets/image-footer/Logo.png'

import locIcon from './../../assets/icons-footer/Localizacao.png'
import telIcon from './../../assets/icons-footer/Telefone.png'
import mailIcon from './../../assets/icons-footer/Mail.png'

import facebookIcon from './../../assets/icons-footer/Facebook.png'
import instagramIcon from './../../assets/icons-footer/Instagram.png'
import linkedinIcon from './../../assets/icons-footer/Linkedin.png'
import YoutubeIcon from './../../assets/icons-footer/youtube.png'
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
                            <a href="https://www.google.com/maps/place/Av.+Armando+Salles+de+Oliveira,+2113+-+Parque+Suzano,+Suzano+-+SP/@-23.5514651,-46.3220768,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce7a7f344ae4f5:0xd075338c769dfa5!8m2!3d-23.55147!4d-46.3195019!16s%2Fg%2F11c5k4752f?entry=ttu" target='blank' className='left-text-footer'>
                                Unidade I - Av. Armando Salles de Oliveira, 2113 <br /> Parque Suzano, Suzano - SP
                            </a>

                            <a href="https://www.google.com/maps/place/R.+Jos%C3%A9+de+Oliveira+Gomes,+128+-+Centro,+Po%C3%A1+-+SP,+08561-300/@-23.5263647,-46.3450165,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce7ae0bd764555:0x5632588c04fa7807!8m2!3d-23.5263696!4d-46.3424416!16s%2Fg%2F11c4y38ybm?entry=ttu" target='blank' className='left-text-footer'>
                                Unidade II - Rua José de Oliveira Gomes, 128 <br /> Centro, Poȧ - SP
                            </a>

                        </div>

                    </div>

                    <div className="left-box-footer">

                        <img src={telIcon} alt="" className="left-icons-footer" />
                        <a href="tel:1155943547" className="left-text-footer" >
                            (11) 4742-7067 /
                        </a>
                        <a href="tel:1146398028" className="left-text-footer" >
                            (11) 4639-8028
                        </a>

                    </div>

                    <div className="left-box-footer">

                        <img src={mailIcon} alt="" className="left-icons-footer" />
                        <a href="mailto:contato@impactoengseg.com.br" className='left-text-footer' >
                            contato@impactoengseg.com.br
                        </a>

                    </div>

                </div>

                <div className="container-central-footer">

                    <a href="https://www.facebook.com/ImpactoEngenhariadeSegurancaeMeioAmbiente" target='blank'>
                        <img src={facebookIcon} className="central-icons-footer" />
                    </a>

                    <a href="https://www.instagram.com/impacto_eng/" target='blank'>
                        <img src={instagramIcon} className="central-icons-footer" />
                    </a>

                    <a href="https://www.linkedin.com/company/impacto-engenharia-de-seguranca-e-meio-ambiente/" target='blank'>
                        <img src={linkedinIcon} className="central-icons-footer" />
                    </a>

                    <a href="https://www.youtube.com/@ImpactoEngseg" target='blank'>
                        <img src={YoutubeIcon} className="central-icons-footer" />
                    </a>

                </div>

                <img src={logo} className="logo-footer" onClick={TopEffect} />

            </div>

            <div className="container-bottom-footer">

                <p className='text-bottom-footer'>© desde 2004, todos os direitos reservados.</p>

                <p className='text-bottom-footer '>Desenvolvido por{" "} <a href="http://astraltech.com.br" target="_blank" className='link-astral-tech'>Astral Tech</a></p>

            </div>

        </footer>
    )
}