import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Experience from './components/Experience';
import './App.css';
import Models from './components/Models';
import TextInCanvas from './components/TextInCanvas';
import Portal from './components/Portal';
import MouseEvents from './components/MouseEvents';
import PostProcessing from './components/PostProcessing';

const created = ({ gl, scene }) => {
    // gl.setClearColor('#ff0000', 1);
    // scene.background = new THREE.Color('blue');
}

function App() {


  return (
    <>
        <Canvas
            // onPointerMissed={ () => console.log('you missed!')}
            // flat
        >
            <PostProcessing />
            {/* <MouseEvents /> */}
            {/* <Portal /> */}
            {/* <TextInCanvas /> */}
            {/* <Models /> */}
            {/* <Experience /> */}
        </Canvas>
    </>
  )
}

export default App
