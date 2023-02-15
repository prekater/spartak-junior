import React, { useEffect, useState } from 'react'

import cn from 'clsx'

import { useTestContext } from '../../providers/TestProvider'
import { ModalIcon } from './ModalIcon'
import { QuestionIcon } from './QuestionIcon'

import styles from './BottomButton.module.scss'

export const TestButton = () => {
  const [isInitialButtonState, setInitialButtonState] = useState(false)
  const [isClickedTest, setClickedTest] = useState(false)

  const { onChangeOpenTest, testIsOpen } = useTestContext()

  const isClickedTestIsOpen = testIsOpen && !isClickedTest

  useEffect(() => {
    if (isClickedTestIsOpen) {
      setClickedTest(true)
      setInitialButtonState(true)
    }
  }, [isClickedTestIsOpen])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialButtonState(true)
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const testButton = cn(styles.testButton, {
    [styles.testButtonInitial]: isClickedTest,
    [styles.testButtonFull]: !isInitialButtonState && !isClickedTest,
  })

  const testButtonLabel = cn(styles.testButtonLabel, {
    [styles.testButtonLabelFull]: !isInitialButtonState && !isClickedTest
  })

  const callibri = cn(styles.callibri_quiz_hook_answ, {
    [styles.callibri_quiz_hook_answHide]: !isInitialButtonState && !isClickedTest
  })


  return (
    <button
      className={testButton}
      onClick={() => onChangeOpenTest(true)}
      type="button"
    >
      {isClickedTest ? <ModalIcon /> : (
        <>
          <QuestionIcon className={callibri} />
           <span className={testButtonLabel}>
             Сможет ли Ваш ребёнок<br /> заниматься футболом?
           </span>
        </>
      )}

    </button>
  )
}
