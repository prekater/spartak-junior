import { Selector } from 'shared/components/Selector/'

import styles from './SendRequest.module.scss'

export const SendRequest = () => {
  return (
    <>
      <p className={styles.description}>Куда отправить ответ?</p>
      <Selector />
      <p className={styles.description}>Как отправить ответ?</p>
      <div className={styles.radioWrapper}>
        <label className={styles.labelRadio}>
          <input className={styles.inputHide} name="radio" type="radio" required value="Позвоните мне и ответьте на вопрос по телефону" />
          <div className={styles.radioButton} />
          <p>Позвоните мне и ответьте на вопрос по телефону</p>
        </label>
        <label className={styles.labelRadio}>
          <input className={styles.inputHide} name="radio" type="radio" value="Отправьте ответ сообщением на WhatsApp" />
          <div className={styles.radioButton} />
          <p>Отправьте ответ сообщением на WhatsApp</p>
        </label>
      </div>
    </>
  )
}
