import React from 'react'

import { NavigationProvider } from '../providers/NavigationProvider'
import { ScrollControlProvider } from '../providers/ScrollControlProvider'
import { TestProvider } from '../providers/TestProvider'

import styles from './AppContainer.module.scss'

interface IProps {
  children: React.ReactNode
}

const AppContainer = ({ children }: IProps): JSX.Element => {
  return (
    <ScrollControlProvider>
      <TestProvider>
        <NavigationProvider>
          <div className={styles.root}>{children}</div>
        </NavigationProvider>
      </TestProvider>
    </ScrollControlProvider>
  )
}

export default AppContainer
