import React, { useRef } from 'react'
import { MeshReflectorMaterial, Float, Text, Html, PivotControls, OrbitControls, TransformControls } from '@react-three/drei';

export const Experience = () => {

    const cubeRef = useRef();
    const sphereRef = useRef();



    return (
        <>

            <OrbitControls makeDefault />
            
            <directionalLight position={ [ 1, 2, 3  ] } intensity={ 1.5 }/>
            <ambientLight intensity={ 0.5 }/>

            <PivotControls 
                anchor={ [ 0, 0, 0 ] } 
                depthTest={ false }
                lineWidth={ 4 }
                axisColors={ ['#9381ff', '#ff4d6d', '#7ae582'] }
                scale={ 100 }
                fixed
            >
                <mesh
                    position-x={ - 3 }
                    ref={ sphereRef }
                >
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" />
                    
                    <Html
                        position={ [1, 1, 0] }
                        wrapperClass="label"
                        center
                        distanceFactor={ 6 }
                        occlude={ [ sphereRef, cubeRef ] }
                    >
                        ⚡ Html Inside
                    </Html>
                </mesh>
            </PivotControls>

            <mesh 
                ref={ cubeRef }
                scale={ 1.5 }
                position-x={ 3.5 }
            >
                <boxGeometry scale={ 1.5 } />
                <meshStandardMaterial color="mediumpurple" wireframe={ false } />
            </mesh>

            <TransformControls object={ cubeRef }  showY={ false } translationSnap={ 1 } />


            <mesh
                position-y={ - 1 }
                rotation-x={ - Math.PI * 0.5 }
                scale={ 10 }
            >
                <planeGeometry />
                <MeshReflectorMaterial 
                    resolution={ 512 } 
                    blur={ [1000, 1000] }
                    mixBlur={ 1 } 
                    mirror={ 0.5 }
                    color="greenyellow"
                />
                
                {/* <meshStandardMaterial color="greenyellow" /> */}
            </mesh>

            <Float
                speed={ 4 }
                floatIntensity={ 3 }
            >
                        <Text 
                            font="./MerriweatherSans-Regular.ttf"
                            fontSize={ 1 }
                            color="salmon"
                            position-y={ 2 }
                            maxWidth={ 3 }
                            textAlign="center"
                        >
                            I love R3F
                        </Text>
            </Float>

        </>
    )
}

export default Experience;