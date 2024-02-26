import Header from "../../../components/header";
import Formulario from "../../inicio/5-formulario";
import Footer from "../../../components/footer";
import WhatsappFixed from "../../../components/whatsappFixed";
import './contato-style.css'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import imgVerticalAzul from './../../../assets/line-style/color-blue-vertical.png'


export default function Contato() {
    const navigate = useNavigate()
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [navigate]);

    return (
        <main className="contato">
            <Header />
            <div className="container-contato">
                <Formulario  imageLineVertical={imgVerticalAzul}/>
            </div>

            <Footer />

            <WhatsappFixed />
        </main>
    )
}