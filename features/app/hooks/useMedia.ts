import { useEffect, useState } from 'react'

const isClient = typeof window !== 'undefined'

export const useMedia = (query: string): boolean => {
  const [state, setState] = useState(
    isClient
      ? () => {
          return window.matchMedia(query).matches
        }
      : false
  )

  useEffect(() => {
    if (isClient) {
      let mounted = true
      const mql = window.matchMedia(query)
      const onChange = () => {
        if (!mounted) {
          return
        }
        setState(!!mql.matches)
      }

      mql.addListener(onChange)
      setState(mql.matches)

      return () => {
        mounted = false
        mql.removeListener(onChange)
      }
    }
  }, [])

  return state
}
