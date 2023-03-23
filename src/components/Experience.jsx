import React, { useRef } from 'react'
import * as THREE from 'three';
import { Stage, Environment, Sky, ContactShadows, AccumulativeShadows, SoftShadows, BakeShadows, OrbitControls, useHelper, RandomizedLight, Lightformer } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useFrame } from '@react-three/fiber';
import { Leva, useControls } from 'leva';

// const softShadowsConfig = {
//     frustum: 3.75,
//     size: 10,
//     near: 9.5,
//     samples: 17,
//     rigs: 11
// };

export const Experience = () => {

    const shadow = useControls('shadow', {
        color: '#000000',
        opacity: {
            value: 1,
            min: 0,
            max: 1,
            step: 0.01
        },
        blur: {
            value: 5,
            min: 0,
            max: 10,
            step: 0.01
        }
    })

    const sky = useControls('Sky', {
        sunPosition: {
            value: [1, 2, 3]
        }
    });

    const envMap = useControls('Environment map', {
        envMapIntensity: {
            value: 1,
            min: 0,
            max: 12
        },
        envMapHeight: { value: 7, min: 0, max: 100},
        envMapRadius: { value: 20, min: 10, max: 1000},
        envMapScale: { value: 100, min: 10, max: 1000},
    });

    const directionalLight = useRef();

    useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

    const cube = useRef();

    useFrame(( state, delta ) => {
        cube.current.rotation.y += delta * 0.2;
        // cube.current.position.x = Math.cos(state.clock.elapsedTime) + 2;
    })


    return (
        <>

            {/* <Environment 
                preset="sunset"
                ground={{
                    height: envMap.envMapHeight,
                    radius: envMap.envMapRadius,
                    scale: envMap.envMapScale
                }}
                resolution={ 32 }
                files={ './environmentMaps/the_sky_is_on_fire_2k.hdr' }
                files={ [
                    './environmentMaps/2/px.jpg',
                    './environmentMaps/2/nx.jpg',
                    './environmentMaps/2/py.jpg',
                    './environmentMaps/2/ny.jpg',
                    './environmentMaps/2/pz.jpg',
                    './environmentMaps/2/nz.jpg',
                ] }
            
            > */}
                {/* <color args={ ['black'] } attach="background" />
                <Lightformer 
                    position-z={ -5 } 
                    scale={ 10 } 
                    color="red"
                    intensity={ 10 }
                    form="ring"
                /> */}
                {/* <mesh
                position-z={ -5 }
                scale={ 10 }
            >
                <planeGeometry />
                <meshBasicMaterial color={[ 5, 0, 0 ]} />
            </mesh> */}
            {/* </Environment> */}
            

            {/* <SoftShadows {...softShadowsConfig} /> */}

            {/* <BakeShadows /> */}

            {/* <color args={ [ 'ivory' ] } attach='background' /> */}

            <Perf 
                position="top-left"
            />
            
            <OrbitControls makeDefault />



            {/* <AccumulativeShadows
                position={ [0, -0.99, 0] }
                scale={ 10 }
                color="#316d39"
                opacity={ 0.8 }
                frames={ Infinity }
                temporal
                blend={ 20 }
            >
                <RandomizedLight 
                    amount={ 8 }
                    radius={ 1 }
                    ambient={ 0.5 }
                    intensity={ 1 }
                    position={ [ 1, 2, 3 ] }
                    bias={ 0.001 }
                />

            </AccumulativeShadows> */}

            {/* <ContactShadows 
                position-y={ 0  }
                scale={ 10 }
                resolution={ 512 }
                far={ 5 }
                color={ shadow.color }
                opacity={ shadow.opacity }
                blur={ shadow.blur }
                frames={ 1 }
            /> */}

            {/* <directionalLight 
                ref={ directionalLight } 
                position={ sky.sunPosition } 
                intensity={ 1.5 }
                castShadow 
                shadow-mapSize={ [1024, 1024] }
                shadow-camera-near={ 1 }
                shadow-camera-far={ 10 }
                shadow-camera-top={ 4 }
                shadow-camera-right={ 5 }
                shadow-camera-bottom={ - 4 }
                shadow-camera-left={ - 4 }
            /> */}

            {/* <Sky 
                sunPosition={ sky.sunPosition }
            /> */}

            {/* <ambientLight intensity={ 0.5 } /> */}


            {/* <mesh
                position-x={ -3 }
                position-y={ 1 }
                castShadow
            >
                <sphereGeometry />
                <meshStandardMaterial color="orange" envMapIntensity={ envMap.envMapIntensity }/>
            </mesh>

            <mesh 
                ref={ cube }
                scale={ 1.50 }
                position-x={ 3.5 }
                position-y={ 1 }
                castShadow
            >
                <boxGeometry scale={ 1.5 } />
                <meshStandardMaterial color="mediumpurple" wireframe={ false } envMapIntensity={ envMap.envMapIntensity } />
            </mesh> */}

            {/* <mesh
                position-y={ 0 }
                rotation-x={ - Math.PI * 0.5 }
                scale={ 10 }
            >
                <planeGeometry />
                
                <meshStandardMaterial color="greenyellow" envMapIntensity={ envMap.envMapIntensity } />
            </mesh> */}

            <Stage
                shadows={{
                    type: 'contact',
                    opacity: .3,
                    blur: 1
                }}
                environment="sunset"
                preset="soft"
                intensity={ 1 }
            >
                <mesh
                    position-x={ -3 }
                    position-y={ 1 }
                    castShadow
                >
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" envMapIntensity={ envMap.envMapIntensity }/>
                </mesh>

                <mesh 
                    ref={ cube }
                    scale={ 1.50 }
                    position-x={ 3.5 }
                    position-y={ 1 }
                    castShadow
                >
                    <boxGeometry scale={ 1.5 } />
                    <meshStandardMaterial color="mediumpurple" wireframe={ false } envMapIntensity={ envMap.envMapIntensity } />
                </mesh>
            </Stage>

        </>
    )
}

export default Experience;