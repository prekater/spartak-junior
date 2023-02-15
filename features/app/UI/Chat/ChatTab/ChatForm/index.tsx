import { BaseSyntheticEvent, useState } from 'react'

import { E164Number } from 'libphonenumber-js'
import PhoneInput from 'react-phone-number-input/input'

import styles from './ChatForm.module.scss'

interface IChatForm {
  name: string
  phone: E164Number | undefined
}

interface IProps {
  onSubmitForm?: () => void
  isFormFulfilled?: boolean
}

export const ChatForm = ({ onSubmitForm, isFormFulfilled }: IProps) => {
  const [formValues, setFormValues] = useState<IChatForm>({
    name: '',
    phone: ''
  })

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    console.log('formValues', formValues)
    console.log('formValues.name.length > 0', formValues.name.length > 0)
    console.log('!!formValues.phone', !!formValues.phone)

    if (formValues.name.length > 0 && !!formValues.phone && !!onSubmitForm) {
      onSubmitForm()
    }
  }

  const handleChange = (e: BaseSyntheticEvent) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleChangePhone = (param: E164Number | undefined) => {
    setFormValues({ ...formValues, phone: param })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" className={styles.input} placeholder="Имя" name="name" value={formValues.name} onChange={handleChange} />
      <PhoneInput
        international
        value={formValues.phone}
        onChange={handleChangePhone}
        name="phone"
        className={styles.input}
        placeholder="+7 (___) ___-__-__"
        required
      />
      <span className={styles.redDot} />
      {isFormFulfilled ? (
        <span className={styles.thanks}>Спасибо, {formValues.name}</span>
      ) : (
        <button className={styles.button}>Начать диалог</button>
      )}
    </form>
  )
}
