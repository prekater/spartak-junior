
import cn from 'clsx'

import { useTestContext } from '../../providers/TestProvider'
import { ChatButton } from './ChatButton'
import { TestButton } from './TestButton'

import styles from './BottomButton.module.scss'

const BottomButton = () => {
  const { testIsOpen } = useTestContext()

  const root = cn(styles.root, {
    [styles.hide]: testIsOpen
  })

  return (
      <div className={root}>
        <TestButton />
        <ChatButton />
      </div>
  )
}

export default BottomButton
