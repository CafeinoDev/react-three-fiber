import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Experience from './components/Experience';
import './App.css';
import Models from './components/Models';

const created = ({ gl, scene }) => {
    // gl.setClearColor('#ff0000', 1);
    // scene.background = new THREE.Color('blue');
}

function App() {


  return (
    <>
        <Canvas
            shadows
        >
            <Models />
            {/* <Experience /> */}
        </Canvas>
    </>
  )
}

export default App
