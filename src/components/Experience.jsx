import React, { useRef } from 'react'
import { extend, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CustomObject } from './CustomObject';

extend({ OrbitControls })

export const Experience = () => {

    const { camera, gl } = useThree();
    const cubeRef = useRef();
    const groupRef = useRef();



    useFrame(({ camera, clock }, delta) => {
        // camera.position.x += delta;

        // console.log(clock.elapsedTime);

        const angle = clock.elapsedTime;
        camera.position.x = Math.sin(angle) * 8
        camera.position.z = Math.cos(angle) * 8
        camera.lookAt(0, 0, 0);

        cubeRef.current.rotation.y += delta;
        // groupRef.current.rotation.y += delta;
    })



    return (
        <>
            {/* <orbitControls args={ [camera, gl.domElement ] }/> */}

            <directionalLight position={ [ 1, 2, 3  ] } intensity={ 1.5 }/>
            <ambientLight intensity={ 0.5 }/>

            <group ref={ groupRef }>
                <mesh 
                    rotation-y={ Math.PI * 0.25 }
                    position-x={ 3 }
                    scale={ 1.5 }
                    ref={ cubeRef }
                >
                    <boxGeometry scale={ 1.5 } />
                    <meshStandardMaterial color="mediumpurple" wireframe={ false } />
                </mesh>

                <mesh
                    position-x={ -3 }
                >
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </group>

            <mesh
                position-y={ - 1 }
                rotation-x={ - Math.PI * 0.5 }
                scale={ 10 }
            >
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh>

            <CustomObject />
        </>
    )
}

export default Experience;