import styles from './Phone.module.scss'

const Phone = () => {
  return (
    <div className={styles.root}>
      <a className={styles.phoneLink} href="tel:+74958773115">
        <span className={styles.phoneText}>Нажмите, чтобы позвонить</span>
        <span className={styles.phone}>+7 (495) 877-31-15</span>
      </a>
    </div>
  )
}

export default Phone
