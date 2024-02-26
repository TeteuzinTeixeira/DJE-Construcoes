import "./animation-meio-abiente-style.css";
import { useState } from "react";

import imgAnimationOne from "./../../../../assets/servicos-single/bg-circulo-1.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import imageCarrosselOne from "./../../../../assets/carrossel-MeioAmbiente/1.jpg";
import imageCarrosseltwo from "./../../../../assets/carrossel-MeioAmbiente/2.jpg";
import imageCarrosselthree from "./../../../../assets/carrossel-MeioAmbiente/3.jpg";

export default function AnimationMeioAmbiente() {
  return (
    <div className="container-eng-seg-e-meio-ambiente">
      <div className="circulo-one-blue"></div>

      <img src={imgAnimationOne} alt="" className="img-circulo-anel" />

      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        autoPlay={true}
        interval={7200}
        transitionTime={700}
        stopOnHover={false}
        showIndicators={false}
        showArrows={false}
        className="carrossel-eng-seg carrossel-meio-ambiente-one"
      >
        <img
          src={imageCarrosselthree}
          alt="imagem impacto"
          className="img-eng-seg img-carrossel-meioambiente"
        />

        <img
          src={imageCarrosselOne}
          alt="imagem impacto"
          className="img-eng-seg img-carrossel-meioambiente"
        />

        <img
          src={imageCarrosseltwo}
          alt="imagem impacto"
          className="img-eng-seg img-carrossel-meioambiente"
        />
      </Carousel>

      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        autoPlay={true}
        interval={7000}
        transitionTime={700}
        stopOnHover={false}
        showIndicators={false}
        showArrows={false}
        className="mini-carrossel-meio-ambiente-one"
      >
        <img
          src={imageCarrosselOne}
          alt="imagem impacto"
          className="img-mini-carrossel-meio-ambiente-one"
        />
        <img
          src={imageCarrosseltwo}
          alt="imagem impacto"
          className="img-mini-carrossel-meio-ambiente-one"
        />
        <img
          src={imageCarrosselthree}
          alt="imagem impacto"
          className="img-mini-carrossel-meio-ambiente-one"
        />
      </Carousel>

      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        autoPlay={true}
        interval={7100}
        transitionTime={700}
        stopOnHover={false}
        showIndicators={false}
        showArrows={false}
        className="mini-carrossel-meio-ambiente-two"
      >
        <img
          src={imageCarrosseltwo}
          alt="imagem impacto"
          className="img-mini-carrossel-meio-ambiente-two"
        />
        <img
          src={imageCarrosselthree}
          alt="imagem impacto"
          className="img-mini-carrossel-meio-ambiente-two"
        />
        <img
          src={imageCarrosselOne}
          alt="imagem impacto"
          className="img-mini-carrossel-meio-ambiente-two"
        />
      </Carousel>
    </div>
  );
}
