import Image from 'next/image'

import { ChatForm } from '../ChatForm'

import styles from './OperatorMsg.module.scss'

interface IProps {
  message: string
  isShowForm?: boolean
  onSubmitForm?: () => void
  isFormFulfilled?: boolean
}

export const OperatorMsg = ({ message, isShowForm, onSubmitForm, isFormFulfilled }: IProps) => {
  const currentTimestamp = Date.now()

  const date = new Intl.DateTimeFormat('default', { hour: '2-digit', minute: '2-digit' }).format(currentTimestamp)

  return (
    <div className={styles.operatorMsg}>
      <div className={styles.iconAndTime}>
        <div className={styles.operatorAvatarWrapper}>
          <Image src="/images/chat/avatar.png" width={34} height={34} alt="operator avatar" className={styles.operatorAvatar} />
          <span className={styles.tooltip}>Вячеслав</span>
        </div>
        <div className={styles.time}>{date}</div>
      </div>
      <div className={styles.msgBlock}>
        {message}
        {isShowForm && <ChatForm onSubmitForm={onSubmitForm} isFormFulfilled={isFormFulfilled} />}
      </div>
    </div>
  )
}
