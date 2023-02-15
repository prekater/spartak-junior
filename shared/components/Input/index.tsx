import { useState, ChangeEvent } from 'react'

import styles from './Input.module.scss'

interface IProps {
  placeholder: string
  onChangePhone?: (param: string) => void
  phoneCode?: string
}

export const Input = ({ placeholder, onChangePhone, phoneCode }: IProps) => {
  const [mobile, setMobile] = useState('')

  const numberHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const validatedValue = event.target.value.replace(/\D/g, '')
    setMobile(validatedValue)
    onChangePhone && onChangePhone(`${phoneCode} ${mobile}`)
  }

  return <input className={styles.phoneInput} type="tel" placeholder={placeholder} value={mobile} onChange={(e) => numberHandler(e)} />
}
