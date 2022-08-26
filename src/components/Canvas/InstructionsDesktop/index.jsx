import { Desktop } from "./style";
import {BsFillPlayCircleFill} from "react-icons/bs"

export const InstrutionsDesktop = ({ setIsInstrutions }) => {
  return (
    <Desktop>
      <span>
        <button onClick={() => setIsInstrutions(false)}><BsFillPlayCircleFill /></button>
      </span>
      <h3>Intruções</h3>
      <section>
        <div>
          <h4>Mais Zoom:</h4>
          <p>Use o scroll do mouse.</p>
        </div>
        <div>
          <h4>Menos Zoom:</h4>
          <p>Use o scroll do mouse.</p>
        </div>
        <div>
          <h4>Mover para os lados:</h4>
          <p>Com o shif precionado, click e arraste para os lados.</p>
        </div>
        <div>
          <h4>Rotacionar:</h4>
          <p>Click e arraste.</p>
        </div>
      </section>
    </Desktop>
  );
};
