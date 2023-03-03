import React from 'react'
import '../App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export const App = () => {
  const { fact, refreshRandomFact } = useCatFact()
  console.log({ fact })
  const { urlImage } = useCatImage({ fact })

  // const CAT_IMAGE_FIRST_WORD = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

  const handleClick = () => {
    // const randomFact = await getRandomFacts()
    // setFact(randomFact)
    refreshRandomFact()
  }

  return (
    <main className='container'>
      {fact && <p>{fact}</p>}
      {urlImage &&
        <img src={urlImage} alt={`Imagen sobre las tres primeras palabras, ${fact}`} />}
      <button onClick={handleClick}>Cambiar la imagen</button>
    </main>
  )
}
