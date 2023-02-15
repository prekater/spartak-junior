import { createContext, createRef, useContext, useRef } from 'react'
import type { MutableRefObject } from 'react'

interface IProps {
  children: JSX.Element
}

type TContextProps = {
  adviceAndTestRef: MutableRefObject<HTMLDivElement | null>
  accountRef: MutableRefObject<HTMLDivElement | null>
  addressRef: MutableRefObject<HTMLDivElement | null>
  momentsRef: MutableRefObject<HTMLDivElement | null>
  methodRef: MutableRefObject<HTMLDivElement | null>
  reviewsRef: MutableRefObject<HTMLDivElement | null>
  faqRef: MutableRefObject<HTMLDivElement | null>
  storeRef: MutableRefObject<HTMLDivElement | null>
  handleScroll: (ref: MutableRefObject<HTMLDivElement | null>) => void
}

export const NavigationContext = createContext<TContextProps>({
  adviceAndTestRef: createRef(),
  accountRef: createRef(),
  addressRef: createRef(),
  momentsRef: createRef(),
  methodRef: createRef(),
  reviewsRef: createRef(),
  faqRef: createRef(),
  storeRef: createRef(),
  handleScroll: () => null
})

export const useNavigation = () => useContext(NavigationContext)

export const NavigationProvider = ({ children }: IProps) => {
  const adviceAndTestRef = useRef<HTMLDivElement | null>(null)
  const accountRef = useRef<HTMLDivElement | null>(null)
  const addressRef = useRef<HTMLDivElement | null>(null)
  const momentsRef = useRef<HTMLDivElement | null>(null)
  const methodRef = useRef<HTMLDivElement | null>(null)
  const reviewsRef = useRef<HTMLDivElement | null>(null)
  const faqRef = useRef<HTMLDivElement | null>(null)
  const storeRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = (ref: MutableRefObject<HTMLDivElement | null>) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <NavigationContext.Provider
      value={{ adviceAndTestRef, accountRef, addressRef, momentsRef, methodRef, reviewsRef, faqRef, storeRef, handleScroll }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
