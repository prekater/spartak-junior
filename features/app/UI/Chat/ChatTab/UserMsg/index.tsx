import styles from './UserMsg.module.scss'

interface IProps {
  message: string
}

export const UserMsg = ({ message }: IProps) => {
  const currentTimestamp = Date.now()

  const date = new Intl.DateTimeFormat('default', { hour: '2-digit', minute: '2-digit' }).format(currentTimestamp)

  return (
    <div className={styles.userMsg}>
      <div className={styles.iconAndTime}>
        <div className={styles.userIcon}>Я</div>
        <div className={styles.time}>{date}</div>
      </div>
      <div className={styles.msgBlock}>{message}</div>
    </div>
  )
}
