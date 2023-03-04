import { useEffect, useState } from 'react'
import { getRandomFacts } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState() //
  const refreshRandomFact = () => {
    getRandomFacts().then(rta => setFact(rta))
  }
  // para recuperar la cita al cargar la página
  useEffect(refreshRandomFact, [])

  return { fact, refreshRandomFact }
}
