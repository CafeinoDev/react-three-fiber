import React from 'react'
import { Clone, useGLTF } from '@react-three/drei';

export const Helmet = () => {

    const model = useGLTF('./hamburger-draco.glb');

    // const model = useLoader(
    //     GLTFLoader, 
    //     './hamburger.glb', 
    //     // (loader) => {
    //     //     const dracoLoader = new DRACOLoader()
    //     //     dracoLoader.setDecoderPath('./draco/')
    //     //     loader.setDRACOLoader(dracoLoader)
    //     // }
    // );

    return (
        <>
            <Clone 
                object={ model.scene } 
                scale={ 0.35 } 
                position-x={ -5 }             
            />
            <Clone 
                object={ model.scene } 
                scale={ 0.35 } 
            />
            <Clone 
                object={ model.scene } 
                scale={ 0.35 } 
                position-x={ 5 }             
            />
        </>
    )
}

export default Helmet;

useGLTF.preload('./hamburger-draco.glb')