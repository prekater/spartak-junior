import { BaseSyntheticEvent, useState } from 'react'

import { E164Number } from 'libphonenumber-js'
import PhoneInput from 'react-phone-number-input/input'

import { AgreementPopup } from '../../../../../shared/components/AgreementPopup'
import { IStep } from '../types'

import styles from './Step6.module.scss'

interface IProps extends IStep {
  onChangePhone: (param: E164Number | undefined) => void
  onChangeCheckbox: (e: BaseSyntheticEvent) => void
}

export const Step6 = ({ formValues, onChange, onChangePhone, onChangeCheckbox }: IProps) => {
  const [value, setValue] = useState<E164Number | undefined>()

  const [isShowAgree, setIsShowAgree] = useState(false)

  const handleShowAgreement = (param: boolean) => () => setIsShowAgree(param)

  const handleChange = (value: E164Number | undefined) => {
    setValue(value)
    onChangePhone(value)
  }

  return (
    <div className={styles.root}>
      <input type="text" className={styles.input} placeholder="Ваше имя" name="name" value={formValues.name} onChange={onChange} />
      <PhoneInput
        international
        value={value}
        onChange={handleChange}
        name="phone"
        className={styles.input}
        placeholder="+_-(___)-___-__-__"
      />
      <label className={styles.checkboxLabel}>
        <input type="checkbox" name="isAgree" checked={formValues.isAgree} onChange={onChangeCheckbox} />
        <span className={styles.agreement} onClick={handleShowAgreement(true)}>
          Согласен на обработку моих
          <br />
          персональных данных
        </span>
        <span className={styles.checkboxMark} />
      </label>
      {isShowAgree && <AgreementPopup handleClose={handleShowAgreement(false)} />}
    </div>
  )
}
