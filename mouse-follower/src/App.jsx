
import { useEffect, useState } from 'react'
import './App.css'
import { FollowMouse } from './components/FollowMouse'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ X: 0, Y: 0 })

  useEffect(() => {
    const hadleMove = (e) => {
      const { clientX, clientY } = e
      setPosition({ X: clientX, Y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', hadleMove)
    }
    return () => {
      window.removeEventListener('pointermove', hadleMove)
    }
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      // document.body.classList.remove('no-cursor')
      document.body.classList.toggle('no-cursor', enabled)
    }
  }, [enabled])

  return (
    <main>
      <FollowMouse position={position} enabled={enabled} setEnabled={setEnabled} />

    </main>
  )
}

export default App
