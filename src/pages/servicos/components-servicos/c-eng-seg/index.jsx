import "./animation-eng-seg-style.css";

import imgAnimationOne from "./../../../../assets/servicos-single/bg-circulo-1.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import imageCarrosselOne from "./../../../../assets/images-servicos/EngSeg/Engenharia 1.jpg";
import imageCarrosseltwo from "./../../../../assets/images-servicos/EngSeg/Engenharia 5.jpg";
import imageCarrosselthree from "./../../../../assets/images-servicos/EngSeg/Engenharia 3.jpg";
import imageCarrosselfour from "./../../../../assets/images-servicos/EngSeg/Engenharia 4.png";

export default function AnimationEngSeg() {
  return (
    <div className="container-eng-seg-e-meio-ambiente">
      <div className="circulo-one-blue"></div>

      <img src={imgAnimationOne} alt="" className="img-circulo-anel" />

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
        className="carrossel-eng-seg"
      >
        <img
          src={imageCarrosselOne}
          alt="imagem impacto"
          
          className="img-eng-seg "
        />

        <img src={imageCarrosseltwo} alt="" srcset="" className="img-eng-seg" />

        <img
          src={imageCarrosselthree}
          alt="imagem impacto"
          
          className="img-eng-seg"
        />

        <img
          src={imageCarrosselfour}
          alt="imagem impacto"
          className="img-eng-seg"
        />
      </Carousel>

      <img src={imageCarrosselOne} alt="imagem impacto" className="img-mini-carrossel-1" />
      <img src={imageCarrosseltwo} alt="imagem impacto" className="img-mini-carrossel-2" />
      <img src={imageCarrosselthree} alt="imagem impacto" className="img-mini-carrossel-3" />
      <img src={imageCarrosselfour} alt="imagem impacto" className="img-mini-carrossel-4" />
    </div>
  );
}
