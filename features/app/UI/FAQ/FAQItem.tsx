import { useState } from 'react'

import cn from 'clsx'

import { MenuQuestionProps } from './useMenuQuestions'

import styles from './FAQ.module.scss'

export const FAQItem = ({ questionNumber, question, answer }: MenuQuestionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const tabWrapper = cn(styles.tabWrapper, {
    [styles.tabWrapperOpened]: isOpen
  })

  return (
    <li>
      <div className={tabWrapper}>
        <div className={styles.tabButton} onClick={() => setIsOpen(prev => !prev)}>
          <span className={styles.textButton}>
            <span className={styles.number}>{questionNumber}</span>
            {question}
          </span>
          <div className={styles.closeBtn}>
            <div className={styles.iconClose} />
          </div>
        </div>
        <p className={styles.text}>{answer}</p>
      </div>
    </li>
  )
}
