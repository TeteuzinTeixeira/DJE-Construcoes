import './header-style.css'
import ImgLogoHeader from './../../assets/icons-header/logo-impacto.png';
import { BsList } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Header() {

    const navigate = useNavigate();


    const [viewListServicos, SetViewListServicos] = useState(false)
    const [showHeader, setShowHeader] = useState(false);


    const handleShowHeader = () => {
        setShowHeader(!showHeader)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setShowHeader(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (


        <header data-aos="zoom-out" data-aos-duration='1000'>

            <img src={ImgLogoHeader} alt="logo" className="img-logo-header" onClick={() => {window.scrollTo(0, 0);  navigate('/')}} />

            <button className="button-show-header" onClick={handleShowHeader}>
                <BsList />
            </button>

            <div className={showHeader ? "show-buttons-header" : "box-buttons-header"}>

                <button className="button-header button-show-header" onClick={handleShowHeader}>

                    <AiOutlineClose />

                </button>


                <button className="button-header" onClick={() => {window.scrollTo(0, 0);  navigate('/')}}>
                    INÍCIO
                </button>


                <div className="box-buttons-servicos"
                    onMouseEnter={() => SetViewListServicos(true)}
                    onMouseLeave={() => SetViewListServicos(false)}
                    onClick={showHeader ? () => SetViewListServicos(!viewListServicos) : null}
                >

                    <button className="button-header button-servico" onClick={() => navigate('/servicos')}>
                        SERVIÇOS
                        {viewListServicos ? <FaCaretUp /> : <FaCaretDown />}
                    </button>

                    {viewListServicos &&
                        <ul className="list-buttons-servicos">
                            <li className='button-header-servicos' onClick={() => {window.scrollTo(0, 0); navigate('/engenharia-de-seguranca')}}>Engenharia de segurança</li>
                            <li className='button-header-servicos' onClick={() => {window.scrollTo(0, 0); navigate('/saude-ocupacional')}}>Saúde Ocupacional</li>
                            <li className='button-header-servicos' onClick={() => {window.scrollTo(0, 0); navigate('/treinamentos')}}>Treinamentos</li>
                            <li className='button-header-servicos' onClick={() => {window.scrollTo(0, 0); navigate('/curso-de-bombeiro-civil')}}>Curso de Bombeiro Civil</li>
                            <li className='button-header-servicos' onClick={() => {window.scrollTo(0, 0); navigate('/meio-ambiente')}}>Meio Ambiente</li>
                            <li className='button-header-servicos' onClick={() => {window.scrollTo(0, 0); navigate('/servicos')}}>Ver todos</li>
                        </ul>
                    }

            </div>


            <button className="button-header button-header-faca-seu-orçamento" onClick={() => {window.scrollTo(0, 0); navigate('/contato')}}>
                FAÇA SEU ORÇAMENTO
            </button>

        </div>

        </header >

    )
}