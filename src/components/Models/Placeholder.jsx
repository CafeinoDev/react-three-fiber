import React from 'react'

export const Placeholder = (props) => {
  return (
    <mesh {...props} >
        <boxGeometry args={ [1,1,1,2,2,2] } />
        <meshStandardMaterial color={ 'red' } wireframe />
    </mesh>
  )
}

export default Placeholder;
