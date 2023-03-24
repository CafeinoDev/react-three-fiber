import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

import React, { Suspense } from 'react'
import Fox from './Models/Fox';
import Hamburger from './Models/Hamburguer';
import Helmet from './Models/Helmet';
import Placeholder from './Models/Placeholder';

const Models = () => {
    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <Suspense fallback={
            <Placeholder 
                scale={ 0.35 }  
                // position={ [0, 0.5, 0] }
            />
        }>
            <Hamburger scale={ 0.35 } />
            <Fox />
        </Suspense>
    </>
}

export default Models;