import { Center, Text3D, OrbitControls, useMatcapTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
const material = new THREE.MeshMatcapMaterial();

const TextInCanvas = () =>
{

    const donuts = useRef([]);

    // const [ torusGeometry, setTorusGeometry ] = useState();
    // const [ material, setMaterial ] = useState();

    const [ matcapTexture ] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256);

    // const donutsGroup= useRef()

    useFrame((state, delta) => {
        for(const donut of donuts.current){
            donut.rotation.y += 0.4 * delta;
        }
    });


    useEffect(() => {
        matcapTexture.encoding = THREE.sRGBEncoding;
        matcapTexture.needsUpdate = true;

        material.matcap = matcapTexture;
        material.needsUpdate = true;
    }, [])
    

    return <>

        <Perf position="top-left" />
        <OrbitControls makeDefault />

        {/* <torusGeometry ref={ setTorusGeometry } args={ [ 1, 0.6, 16, 32 ] } />
        <meshMatcapMaterial ref={ setMaterial } matcap={ matcapTexture } /> */}

        <Center>
            <Text3D 
                material={ material }
                font="./fonts/helvetiker_regular.typeface.json"
                size={ 0.75 }
                height={ 0.2 }
                curveSegments={ 12 }
                bevelEnabled
                bevelThickness={ 0.02 }
                bevelSize={ 0.02 }
                bevelOffset={ 0 }
                bevelSegments={ 5 }
            >
                Hello R3F
            </Text3D>
        </Center>


        {
            [...Array(100)].map((d, i) => (
                <mesh 
                    key={ i } 
                    ref={ (el) => donuts.current[i] = el  }
                    geometry={ torusGeometry }
                    material={ material }
                    position={ [ 
                        (Math.random() - 0.5) * 10, 
                        (Math.random() - 0.5) * 10, 
                        (Math.random() - 0.5) * 10 
                    ]}
                    scale={ 0.3 + Math.random() * 0.3 }
                    rotation={
                        [ Math.random() * Math.PI, Math.random() * Math.PI, 0 ]
                    }
                />
                )
            )
        }

    </>
}

export default TextInCanvas;