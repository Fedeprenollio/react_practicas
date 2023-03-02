import React from 'react'

export const FollowMouse = ({ position, setEnabled, enabled }) => {
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.X}px, ${position.Y}px)`

      }}
      />

      <div className='App'>
        Mouse Follower
      </div>
      <button onClick={() => setEnabled(!enabled)}>`{enabled ? 'Desactivar' : 'Activar'} seguimiento de puntero`</button>
    </>
  )
}
