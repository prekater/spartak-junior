import { cloneElement, createContext, createRef, forwardRef, useContext, useRef } from 'react'
import type { ReactElement, MutableRefObject } from 'react'

interface IOwnProps {
  children: ReactElement
}

type TContextProps = {
  toggleScroll: (param: boolean) => void
}

export const ScrollControlContext = createContext<TContextProps>({
  toggleScroll: () => null
})

export const useScrollControl = () => useContext(ScrollControlContext)

const enableBodyScroll = (ref: MutableRefObject<string | null>) => {
  if (ref.current !== null) {
    /** убираем отступ под скролбар */
    document.body.style.paddingRight = ref.current
    ref.current = null
  }

  const scrollY = document.body.style.top
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.left = ''
  document.body.style.right = ''
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
  document.documentElement.style.overflow = ''
}

const disableBodyScroll = (ref: MutableRefObject<string | null>) => {
  /** запоминаем размер скроллбара */
  const scrollBarGap = window.innerWidth - document.documentElement.clientWidth
  if (ref.current === null) {
    /** резервируем местор, чтобы исключить сдвиг при пропадании скроллбара */
    const computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'), 10)
    ref.current = document.body.style.paddingRight
    document.body.style.paddingRight = `${computedBodyPaddingRight + scrollBarGap}px`
  }

  const scroll = window.scrollY
  document.body.style.position = 'fixed'
  document.body.style.top = `-${scroll}px`
  document.body.style.left = '0'
  document.body.style.right = '0'
  document.documentElement.style.overflow = 'hidden'
}

export const ScrollControlProvider = ({ children }: IOwnProps) => {
  const previousBodyPaddingRightRef = useRef<string | null>(null)

  const toggleScroll = (param: boolean) => {
    if (param) {
      enableBodyScroll(previousBodyPaddingRightRef)
    } else {
      disableBodyScroll(previousBodyPaddingRightRef)
    }
  }

  return <ScrollControlContext.Provider value={{ toggleScroll }}>{cloneElement(children)}</ScrollControlContext.Provider>
}
