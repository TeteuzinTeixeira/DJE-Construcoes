import { useState, useEffect } from "react";
import { AnimateNumberQuantidade } from "../../../components/function-quantidade";

import './quantidade-style.css'

export default function Quantidade() {
    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const [numberThree, setNumberThree] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Verifique se o componente está visível na janela de visualização
            const component = document.querySelector(".quantidade");
            if (component) {
                const rect = component.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    // O componente está visível na janela, então execute a animação
                    AnimateNumberQuantidade(200, setNumberOne, 2000);
                    AnimateNumberQuantidade(100, setNumberTwo, 2000);
                    AnimateNumberQuantidade(100, setNumberThree, 2000);
                    // Remova o ouvinte de scroll após a animação
                    window.removeEventListener("scroll", handleScroll);
                }
            }
        };

        // Adicione o ouvinte de scroll quando o componente montar
        window.addEventListener("scroll", handleScroll);

        // Lembre-se de remover o ouvinte de scroll quando o componente for desmontado
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <main className="quantidade">
            <div className="box-text-quantidade" data-aos="zoom-out-up" data-aos-duration='2000'>
                <p className="text-quantidade">
                    +{numberOne}
                    <br />
                    Construções entregues
                </p>
            </div>
            <div className="box-text-quantidade" data-aos="zoom-out-up" data-aos-duration='2000'>
                <p className="text-quantidade">
                    +{numberTwo}
                    <br />
                    Funcionarios especializados  
                </p>
            </div>
            <div className="box-text-quantidade" data-aos="zoom-out-up" data-aos-duration='2000'>
                <p className="text-quantidade">
                    +{numberThree}
                    <br />
                    Predios pintados
                </p>
            </div>
        </main>
    );
}
