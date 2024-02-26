import { FaWhatsapp } from 'react-icons/fa';
import './whatsappFixed-style.css'

export default function WhatsappFixed() {
    return (
        <a href='https://api.whatsapp.com/send?phone=+5511937200427&text=Ol%C3%A1,+vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es'
        target='blank'
        className='button-whatsapp-fixed'
        data-aos="zoom-in-left" data-aos-duration='2000'>
            <FaWhatsapp />
        </a>
    )
}