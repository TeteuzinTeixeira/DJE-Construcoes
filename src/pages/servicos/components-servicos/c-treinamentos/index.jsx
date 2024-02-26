import "./animation-treinamentos-style.css";

import imageTreinamentos1 from "../../../../assets/images-servicos/Saude/1.png";
import imageTreinamentos2 from "../../../../assets/images-servicos/Saude/2.png";
import imageTreinamentos3 from "../../../../assets/images-servicos/Saude/3.png";
import imageTreinamentos4 from "../../../../assets/images-servicos/Saude/4.png";
import imageTreinamentos5 from "../../../../assets/images-servicos/Saude/5.png";
import imageTreinamentos6 from "../../../../assets/images-servicos/Saude/6.png";
import imageTreinamentos7 from "../../../../assets/images-servicos/Saude/7.png";

export default function AnimationTreinamentos() {
  return (
    <div className="container-animation-treinamentos">
      <div className="container-image-animation-treinamentos">
        <div className="box-image-left-treinamentos">
          <img
            src={imageTreinamentos1}
            className="image-treinamentos img-treinamentos1"
          />
          <img
            src={imageTreinamentos4}
            className="image-treinamentos img-treinamentos2"
          />
          <img
            src={imageTreinamentos5}
            className="image-treinamentos img-treinamentos3"
          />
        </div>

        <div className="box-image-mid-treinamentos">
          <img
            src={imageTreinamentos2}
            className="image-treinamentos img-treinamentos4"
          />
          <img
            src={imageTreinamentos6}
            className="image-treinamentos img-treinamentos5"
          />
          <img
            src={imageTreinamentos7}
            className="image-treinamentos img-treinamentos6"
          />
        </div>

        <div className="box-image-right-treinamentos">
          <img
            src={imageTreinamentos3}
            className="image-treinamentos img-treinamentos7"
          />
        </div>
      </div>

      <div className="box-blue-right-treinamentos"></div>
    </div>
  );
}
