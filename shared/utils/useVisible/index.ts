import { useEffect, useRef, useState } from 'react'
import type { MutableRefObject } from 'react'

export function useVisible(
  ref: MutableRefObject<Element | null | undefined>,
  isContinueObserveOnVisible = false,
  options?: IntersectionObserverInit
) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [isIntersecting, setIntersecting] = useState(false)

  function getObserver() {
    if (observerRef.current === null) {
      observerRef.current =
        typeof window !== 'undefined' && 'IntersectionObserver' in window
          ? new IntersectionObserver(([entry]) => {
              setIntersecting(entry.isIntersecting)
              if (entry.isIntersecting && !isContinueObserveOnVisible) {
                observerRef.current?.disconnect()
              }
            }, options)
          : null
    }
    return observerRef.current
  }

  useEffect(() => {
    const observer = getObserver()
    if (observer && ref.current) {
      observer.observe(ref.current)
      return () => {
        observer.disconnect()
      }
    }
  }, [getObserver, ref])

  return isIntersecting
}
