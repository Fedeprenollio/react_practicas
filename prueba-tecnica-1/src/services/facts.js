const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFacts = () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(rta => {
      if (!rta.ok) {
        throw new Error('Error')
      }
      return rta.json()
    })
    .then(data => {
      const { fact } = data
      // setFact(fact)
      return fact
    })
    .catch(err => console.log(err))
}

export const getURLImg = (firstWord) => {
  return fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
    .then(rta => rta.json())
    .then(data => {
      const { url } = data
      // setUrlImage(url)
      return url
    })
}
