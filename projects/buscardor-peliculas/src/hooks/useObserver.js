import { useEffect, useRef, useState } from 'react'

export function useObserver ({ distance }) {
  const [page, setPage] = useState(1)
  const elementRef = useRef()

  useEffect(() => {
    function onchange (observedEntries, observer) {
      const el = observedEntries[0]
      if (el.isIntersecting) {
        setPage(prevPage => prevPage + 1)
        // observer.disconnect()
      }
    }
    const options = {
      rootMargin: distance,
      root: null
    }
    const observer = new IntersectionObserver(onchange, options)

    // const element = document.querySelectorAll('.lazzy')
    const element = elementRef.current
    observer.observe(element)
    return () => {
      observer.disconnect()
      page(0)
    }
  }, [])

  return { page, elementRef }
}
