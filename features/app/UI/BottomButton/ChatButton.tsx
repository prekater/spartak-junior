import { useState } from 'react'

import dynamic from 'next/dynamic'

import styles from './BottomButton.module.scss'

const Chat = dynamic(() => import('../Chat'))

export const ChatButton = () => {
  const [chatIsOpen, setChatIsOpen] = useState<boolean>(false)

  const handleChangeOpenChat = (param: boolean) => setChatIsOpen(param)
  return (
    <>
      <div className={styles.callButtonWrapper}>
        <button className={styles.callButton} onClick={() => handleChangeOpenChat(true)} type="button">
        </button>
        <div className={styles.colorringBorder} />
      </div>
    {chatIsOpen && <Chat onChangeOpenChat={() => handleChangeOpenChat(false)} />}
    </>
  )
}
