import './maps-style.css';
import LineWhiteH from './../../assets/line-style/color-white-horizontal.png'

export default function MapsCompany(props) {
    return (
        <main className="maps" data-aos="fade-left" data-aos-duration='2000'>
            <h2 className="title-maps" style={{color: props.corTexto}}>
                Atendemos em toda São Paulo
            </h2>

            <div className="container-maps" style={{color: props.corTexto}}>
                <div className="box-maps-unidade">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.74124004398!2d-46.4078761127919!3d-23.505828004976074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce638078a988cd%3A0x1d267f954941595!2sR.%20Piacatuba%2C%20112%20-%20Parque%20Industrial%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008110-030!5e0!3m2!1spt-BR!2sbr!4v1708979461532!5m2!1spt-BR!2sbr"

                        style={{ border: 0, borderRadius: '52px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    <h2 className="title-unidade" style={{color: props.corTexto}}>
                        Estamos localizados
                    </h2>

                    <p className="address-unidade" style={{color: props.corTexto}}>
                        R. Piacatuba, 112 - Parque Industrial, São Paulo - SP, 08110-030<br />
                    </p>
                </div>


            </div>
        </main>
    )
}