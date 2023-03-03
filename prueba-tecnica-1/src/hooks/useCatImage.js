import { useEffect, useState } from 'react'
import { getURLImg } from '../services/facts'

const CAT_PREFIX_URL_IMG = 'https://cataas.com'

export const useCatImage = ({ fact }) => {
  const [urlImage, setUrlImage] = useState('')

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 3).join(' ')

    getURLImg(firstWord).then(url => setUrlImage(url))
  }, [fact])

  return { urlImage: `${CAT_PREFIX_URL_IMG}${urlImage}` }
}
