import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Vignette, Glitch, Noise, Bloom, DepthOfField, SSR } from '@react-three/postprocessing';
import { Perf } from 'r3f-perf';
import { GlitchMode, BlendFunction } from 'postprocessing';
import { useControls } from 'leva';
import Drunk from '../effects/Drunk';

const PostProcessing = () =>
{

    const drunkRef = useRef();

    const drunkEffect = useControls('Drunk Effect', {
        frequency: {
            value: 2,
            min: 0,
            max: 20
        },
        amplitude: {
            value: 0.2,
            min: 0,
            max: 1,
            step: 0.01
        }
    })

    const ssrProps = useControls({
        temporalResolve: true,
        STRETCH_MISSED_RAYS: true,
        USE_MRT: true,
        USE_NORMALMAP: true,
        USE_ROUGHNESSMAP: true,
        ENABLE_JITTERING: true,
        ENABLE_BLUR: true,
        temporalResolveMix: { value: 0.9, min: 0, max: 1 },
        temporalResolveCorrectionMix: { value: 0.25, min: 0, max: 1 },
        maxSamples: { value: 0, min: 0, max: 1 },
        resolutionScale: { value: 1, min: 0, max: 1 },
        blurMix: { value: 0.5, min: 0, max: 1 },
        blurKernelSize: { value: 8, min: 0, max: 8 },
        blurSharpness: { value: 0.5, min: 0, max: 1 },
        rayStep: { value: 0.3, min: 0, max: 1 },
        intensity: { value: 1, min: 0, max: 5 },
        maxRoughness: { value: 0.1, min: 0, max: 1 },
        jitter: { value: 0.7, min: 0, max: 5 },
        jitterSpread: { value: 0.45, min: 0, max: 1 },
        jitterRough: { value: 0.1, min: 0, max: 1 },
        roughnessFadeOut: { value: 1, min: 0, max: 1 },
        rayFadeOut: { value: 0, min: 0, max: 1 },
        MAX_STEPS: { value: 20, min: 0, max: 20 },
        NUM_BINARY_SEARCH_STEPS: { value: 5, min: 0, max: 10 },
        maxDepthDifference: { value: 3, min: 0, max: 10 },
        maxDepth: { value: 1, min: 0, max: 1 },
        thickness: { value: 10, min: 0, max: 10 },
        ior: { value: 1.45, min: 0, max: 2 }
      })

    return <>
        <color args={['#ffffff']} attach='background' />

        <EffectComposer>
            {/* <Vignette 
                offset={ 0.3 }
                darkness={ 0.9 }
                blendFunction={ BlendFunction.NORMAL }
            />
            <Glitch 
                delay={ [ .1, 1.6 ] }
                duration={ [ .1, .3 ] }
                strength={ [.2, .4] }
                mode={ GlitchMode.CONSTANT_WILD }
            />
            <Noise 
                premultiply
                blendFunction={ BlendFunction.SOFT_LIGHT }
            />
            <Bloom 
                mipmapBlur
                intensity={ 0.1 }
                luminanceThreshold={ 0 }
            />

            <DepthOfField 
                focusDistance={ .25 }
                focalLength={ .65 }
                bokehScale={ 6 }
            />

            <SSR 
                { ...ssrProps }
            /> */}

            <Drunk 
                ref={ drunkRef }
                { ...drunkRef }
                // blendFunction={ BlendFunction.DARKEN }
            />
        </EffectComposer>

        <Perf position="top-left" />
        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh position-x={ - 2 } >
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh 
            position-x={ 2 } 
            scale={ 1.5 } 
        >
            <boxGeometry />
            <meshStandardMaterial 
                // emissive="orange"
                color="mediumpurple"
                // emissiveIntensity={ 2 }
                // toneMapped={ false } 
            />

        </mesh>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" metalness={ 0 } roughness={ 0 } />
        </mesh>

    </>
}

export default PostProcessing;