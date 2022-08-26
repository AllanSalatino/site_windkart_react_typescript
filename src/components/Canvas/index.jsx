import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import { WindKart } from "./Models3d/WindKartCorSolida";
import { AreaKart3D, LabelInstrutions } from "./style";
import { InstrutionsMobile } from "./InstructionsMobile";
import { InstrutionsDesktop } from "./InstructionsDesktop";
import {RiFileList2Line} from "react-icons/ri"

export const Three = () => {
  const orbitControlsRef = useRef(null);
  const [isInstrutions, setIsInstrutions] = useState(true);

  return (
    <AreaKart3D>
      <h3>Modelo clássico 3D </h3>
      {isInstrutions ? (
        <LabelInstrutions>
          {window.innerWidth < 1024 ? 
          <InstrutionsMobile setIsInstrutions={setIsInstrutions}/>
          :
          <InstrutionsDesktop setIsInstrutions={setIsInstrutions}/>
          }
        </LabelInstrutions>
      ) : (
        <>
          <button onClick={() => setIsInstrutions(true)}><RiFileList2Line /></button>
          <Canvas
            className="canvas"
            style={{
              width: "80vw",
              height: "80vh",
              backgroundColor: "#0000001a",
              zIndex: 0,
            }}
          >
            <Suspense fallback={null}>
              <PerspectiveCamera
                makeDefault
                position={[-350, 60, 0]}
              ></PerspectiveCamera>
              <OrbitControls
                ref={orbitControlsRef}
                minPolarAngle={(Math.PI / 180) * 30}
                maxPolarAngle={(Math.PI / 180) * 160}
              />
              <directionalLight intensity={1} />
              <ambientLight intensity={0.5} />
              <WindKart position={[-95, -40, 130]}></WindKart>
            </Suspense>
          </Canvas>
        </>
      )}
    </AreaKart3D>
  );
};
