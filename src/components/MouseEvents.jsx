import { useFrame } from '@react-three/fiber'
import { meshBounds, OrbitControls, useGLTF } from '@react-three/drei'
import { useRef } from 'react'

const MouseEvents = () =>
{
    const cube = useRef()

    const hamburguer = useGLTF('./burger.glb');
    
    useFrame((state, delta) =>
    {
        cube.current.rotation.y += delta * 0.2
    })


    const eventHandler = (el) => {
        cube.current.material.color.set(`hsl(${ Math.random() * 360 }, 100%, 75%)`);
        // el.eventObject.material.color = new THREE.Color('tomato');
    }


    return <>

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh position-x={ - 2 } onClick={ (event) => { event.stopPropagation() }} >
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>
        {/* 
            Click Events:
            onClick: Left Click, one tap (mobile)
            onContextMenu: Right Click, Ctrl + Left Click, long tap (mobile)
            onDoubleClick: Double click / tap in the same object
            onPointerUp: Release the click (left or right) or touch
            onPointerDown: On click / tap
            onPointerOver: Cursor / finger just went above the object
            - onPointerEnter: Same as onPointerOver (in fiber)
            onPointerOut: Cursor /finger just went out the object
            - onPointerLeave: Same as onPointerOut (in fiber)
            onPointerMove: On each frame if the cursor has moved since the last frame and is above the object
            onPointerMissed: Click outside the object ()

            Example of usage:
            RTS game as an example (Age of Empire or StarCraft):
            - When the player clicks on a unit, you want to select it.
            - When the user drags and drops, you want to draw a rectangle and when it releases you want to select all units inside the rectangle.
            - When the user clicks again but with the shift key, you want to add to the currently selected units or remove them if they were already selected.
            - When the user clicks but there is no hit, you want to deselect every unit.
        */}
        <mesh 
            ref={ cube } 
            raycast={ meshBounds }
            position-x={ 2 } 
            scale={ 1.5 } 
            onClick={ eventHandler }
            onPointerEnter={() => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={() => { document.body.style.cursor = 'default' } }
        >
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>


        <primitive 
            object={ hamburguer.scene }
            scale={ 0.25 }
            position-y={ 0.5 }
            onClick={(event) => {
                console.log('test')
                event.stopPropagation()
            }}
        />


        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}

export default MouseEvents;