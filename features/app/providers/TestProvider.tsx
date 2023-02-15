import { createContext, ReactNode, useContext, useState } from 'react'

type TTestContextProps = {
  testIsOpen: boolean
  onChangeOpenTest: (param: boolean) => void
}

export const TestContext = createContext<TTestContextProps>({
  testIsOpen: false,
  onChangeOpenTest: () => ({})
})

export const useTestContext = () => useContext(TestContext)

export const TestProvider = ({ children }: { children: ReactNode }) => {
  const [testIsOpen, setTestIsOpen] = useState<boolean>(false)
  const handleChangeOpenTest = (param: boolean) => setTestIsOpen(param)

  return <TestContext.Provider value={{ testIsOpen, onChangeOpenTest: handleChangeOpenTest }}>{children}</TestContext.Provider>
}
