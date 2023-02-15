import { BaseSyntheticEvent } from 'react'

import { TTestForm } from '../types'

import styles from './CustomRadioButton.module.scss'

interface IRadioButton {
  value: string
  formValues: TTestForm
  onChange: (e: BaseSyntheticEvent) => void
  name: string
}

export const CustomRadioButton = ({ value, formValues, onChange, name }: IRadioButton) => {
  return (
    <div className={styles.root}>
      <input
        id={`radio-${value}`}
        type="radio"
        name={name}
        value={value}
        checked={value === formValues[name as keyof typeof formValues]}
        onChange={onChange}
      />
      <label htmlFor={`radio-${value}`}>{value}</label>
    </div>
  )
}
