import React, { useRef } from 'react'
import { OrbitControls } from '@react-three/drei';
import { folder, button, useControls } from 'leva';
import { Perf } from 'r3f-perf';

export const Experience = () => {

    const { perfVisible } = useControls({
        perfVisible: true
    })

    const sphereOptions = useControls('Sphere', {
        position: {
            value: { x: -2, y: 0 },
            joystick: 'invertY',
            step: 0.01
        },
        color: '#ff0000',
        visible: true,
        myInteval: {
            min: 0,
            max: 10,
            value: [5, 8]
        },
        clickMe: button(() => { console.log('Button leva') }),
        choice: {
            options: [ 'a', 'b', 'c' ],
        }
    });

    const cubeOptions = useControls('Cube', {
        scale: {
            value: 1.5,
            step: 0.01,
            min: 0,
            max: 5
        }
    });

    return (
        <>
            {
                perfVisible && (
                    <Perf 
                        position="top-left"
                    />
                )
            }
            
            <OrbitControls makeDefault />

            <directionalLight position={ [ 1, 2, 3] } intensity={ 1.5 } />
            <ambientLight intensity={ 0.5 } />

            <mesh
                position={ [ sphereOptions.position.x, sphereOptions.position.y, 0] }
            >
                <sphereGeometry />
                <meshStandardMaterial color={ sphereOptions.color } />
            </mesh>

            <mesh 
                scale={ cubeOptions.scale }
                position-x={ 3.5 }
                visible={ sphereOptions.visible }
            >
                <boxGeometry scale={ 1.5 } />
                <meshStandardMaterial color="mediumpurple" wireframe={ false } />
            </mesh>

            <mesh
                position-y={ - 1 }
                rotation-x={ - Math.PI * 0.5 }
                scale={ 10 }
            >
                <planeGeometry />
                
                <meshStandardMaterial color="greenyellow" />
            </mesh>
        </>
    )
}

export default Experience;