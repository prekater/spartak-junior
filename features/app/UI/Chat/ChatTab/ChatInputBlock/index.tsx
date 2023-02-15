import { useState } from 'react'

import cn from 'clsx'
import Image from 'next/image'

import { Settings } from './Settings'
import { SocialsBlock } from './SocialsBlock'

import styles from './ChatInputBlock.module.scss'

interface IProps {
  onHover: (param: boolean) => void
  isDisabled: boolean
}

export const ChatInputBlock = ({ onHover, isDisabled }: IProps) => {
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true)

  const handleTextareaFocus = (param: boolean) => setIsPlaceholderVisible(param)

  return (
    <div className={styles.root} onMouseOver={() => onHover(true)} onMouseLeave={() => onHover(false)}>
      <textarea
        id="enter_msg"
        name="enter_msg"
        className={styles.textarea}
        onFocus={() => handleTextareaFocus(false)}
        onBlur={() => setIsPlaceholderVisible(true)}
        disabled={isDisabled}
      />
      <div className={cn(styles.placeholder, { [styles.placeholder__hidden]: !isPlaceholderVisible })}>
        Напишите сообщение и нажмите <strong>enter</strong>
      </div>
      <div className={styles.buttonsWrapper}>
        <div className={styles.icons}>
          <button type="button" className={styles.bottomButton}>
            <Image width={11} height={20} alt="upload file" src="/images/chat/paperClip.svg" />
          </button>
          <Settings />
        </div>
        <button className={styles.sendButton} />
      </div>
      <SocialsBlock />
    </div>
  )
}
