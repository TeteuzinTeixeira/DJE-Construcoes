import "./animation-bombeiro-civil-style.css";

import ImageServicosBombeiroCivil1 from "../../../../assets/images-servicos/EngSeg/1.png";
import ImageServicosBombeiroCivil2 from "../../../../assets/images-servicos/EngSeg/2.png";
import ImageServicosBombeiroCivil3 from "../../../../assets/images-servicos/EngSeg/3.png";

export default function AnimationBombeiroCivil() {
  return (
    <div className="container-animation-bombeiro-civil">
      <div className="box-image-servicos-bombeiro-civil">
        <img
          src={ImageServicosBombeiroCivil1}
          className="image-bombeiro-civil-animation image-bombeirocivil1"
        />
        <img
          src={ImageServicosBombeiroCivil2}
          className="image-bombeiro-civil-animation image-bombeirocivil1"
        />
      </div>

      <img
        src={ImageServicosBombeiroCivil3}
        className="image-bombeiro-civil-animation image-bombeirocivil2"
      />
    </div>
  );
}
