import { useState } from 'react'

import cn from 'clsx'
import Image from 'next/image'

import styles from './SocialsBlock.module.scss'

export const SocialsBlock = () => {
  const [isShowSocials, setIsShowSocials] = useState(false)
  const handleShowSocials = () => setIsShowSocials(!isShowSocials)

  return (
    <div className={cn(styles.socialsBlock, { [styles.socialsBlock__showing]: isShowSocials })}>
      <div className={styles.socialsBlock_text} onClick={handleShowSocials}>
        <span>Продолжить диалог в соцсетях</span>
        <button type="button" className={cn(styles.socialsBlock_button, { [styles.socialsBlock_button__active]: isShowSocials })} />
      </div>
      <div className={styles.socialsBlock_icons}>
        <a href="https://vk.com/public200787566" target="_blank" rel="noreferrer" className={styles.socialsBlock_link}>
          <Image width={36} height={36} alt="vkontakte" src="/images/chat/vk.svg" />
        </a>
        <a href="https://wa.me/79164664677" target="_blank" rel="noreferrer" className={styles.socialsBlock_link}>
          <Image width={36} height={36} alt="whats app" src="/images/chat/wa.svg" />
        </a>
      </div>
    </div>
  )
}
