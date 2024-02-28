import { FaWhatsapp } from 'react-icons/fa';
import './whatsappFixed-style.css'

export default function WhatsappFixed() {
    return (
        <a href=''
        target='blank'
        className='button-whatsapp-fixed'
        data-aos="zoom-in-left" data-aos-duration='2000'>
            <FaWhatsapp />
        </a>
    )
}