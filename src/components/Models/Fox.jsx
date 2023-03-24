import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";

export const Fox = () => {
    const model = useGLTF('./Fox/glTF/Fox.gltf');
    const animations = useAnimations(model.animations, model.scene)

    const { animationName } = useControls('Fox animations', {
        animationName: {
            options: animations.names
        }
    });

    useEffect(() => {
      const action = animations.actions[animationName]
      action
        .reset()
        .fadeIn(0.5)
        .play();

      return () => {
        action.fadeOut(0.5);
      }
    }, [ animationName ])
    

    return (
        <primitive 
            object={ model.scene } 
            scale={ 0.02 }
            position-x={ 4 }  
            position-y={ -1 }
            rotation-y={ 0.4 }
        />
    )
}

export default Fox;