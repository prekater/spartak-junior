import { BaseSyntheticEvent, useState } from 'react'

import { E164Number } from 'libphonenumber-js'
import PhoneInput from 'react-phone-number-input/input'

import styles from './FormTab.module.scss'

interface IChatForm {
  message: string
  name: string
  phone: E164Number | undefined
}

export const FormTab = () => {
  const [formValues, setFormValues] = useState<IChatForm>({
    message: '',
    name: '',
    phone: ''
  })

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    console.log('formValues', formValues)
  }

  const handleChange = (e: BaseSyntheticEvent) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleChangePhone = (param: E164Number | undefined) => {
    setFormValues({ ...formValues, phone: param })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>Вы можете оставить сообщение и мы перезвоним вам как можно скорее</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          name="message"
          className={styles.textarea}
          placeholder="Ваше сообщение..."
          onChange={handleChange}
          value={formValues.message}
        />
        <input type="text" className={styles.input} placeholder="Имя..." name="name" value={formValues.name} onChange={handleChange} />
        <PhoneInput
          international
          value={formValues.phone}
          onChange={handleChangePhone}
          name="phone"
          className={styles.input}
          placeholder="Телефон..."
          required
        />
        <span className={styles.redDot} />
        <button className={styles.button}>Отправить заявку</button>
      </form>
    </div>
  )
}
