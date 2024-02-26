import ImageSaudeOcupacional1 from "../../../../assets/images-servicos/Treinamentos/1.png"
import ImageSaudeOcupacional2 from "../../../../assets/images-servicos/Treinamentos/2.png"
import ImageSaudeOcupacional3 from "../../../../assets/images-servicos/Treinamentos/3.png"

import './animation-saude-ocupacional-style.css'

export default function AnimationSaudeOcupacional(){

    return(
        
        <div className="container-animation-saude-ocupacional">  
            <img src={ImageSaudeOcupacional1} className="image-saude-ocupacional bounce-animation-saude-ocupacional bounce-animation-delay-1-saude-ocupacional" alt="Imagem 1"/>
            <img src={ImageSaudeOcupacional2} className="image-saude-ocupacional bounce-animation-saude-ocupacional bounce-animation-delay-2-saude-ocupacional" alt="Imagem 2"/>
            <img src={ImageSaudeOcupacional3} className="image-saude-ocupacional bounce-animation-saude-ocupacional bounce-animation-delay-3-saude-ocupacional" alt="Imagem 3"/>
        </div>
    );
}