import { Mobile } from "./style";
import maisZoom from "../../../assets/maisZoom.png";
import menosZoom from "../../../assets/menosZoom.png";
import mover from "../../../assets/mover.png";
import rotacionar from "../../../assets/rotacionar.png";
import {BsFillPlayCircleFill} from "react-icons/bs"

export const InstrutionsMobile = ({ setIsInstrutions }) => {
  return (
    <Mobile>
      <button onClick={() => setIsInstrutions(false)}><BsFillPlayCircleFill /></button>
      <h3>Intruções</h3>
      <section>
        <div>
          <h4>Mais Zoom:</h4>
          <p>Com dois dedos, arraste em direções opostas.</p>
          <img src={maisZoom} alt="" />
        </div>
        <div>
          <h4>Menos Zoom:</h4>
          <p>Com dois dedos, arraste em um movimento de pinça.</p>
          <img src={menosZoom} alt="" />
        </div>
        <div>
          <h4>Mover para os lados:</h4>
          <p>Com os dois dedos, arraste para o mesmo lado.</p>
          <img src={mover} alt="" />
        </div>
        <div>
          <h4>Rotacionar:</h4>
          <p>Com um dedo, arraste para os lados.</p>
          <img src={rotacionar} alt="" />
        </div>
      </section>
    </Mobile>
  );
};
