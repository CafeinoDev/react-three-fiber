import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Experience from './components/Experience';
import './App.css';

const created = ({ gl, scene }) => {
    // gl.setClearColor('#ff0000', 1);
    // scene.background = new THREE.Color('blue');
}

function App() {


  return (
    <>
        <Canvas
            shadows={ false }
            gl={{
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping
            }}

            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 3, 2, 6 ]
            } }
        >
            <Experience />
        </Canvas>
    </>
  )
}

export default App
