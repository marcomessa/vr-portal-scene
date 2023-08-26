import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { VRButton } from "@react-three/xr";
import VrExperience from "./VrExperience.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <>
        <VRButton />
        <Canvas
            flat
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [1, 2, 6],
            }}
        >
            <VrExperience>
                <Experience />
            </VrExperience>
        </Canvas>
    </>,
);
