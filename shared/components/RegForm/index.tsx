import { BaseSyntheticEvent, useState, useEffect } from 'react'

import cn from 'clsx'
import Image from 'next/image'

import { useScrollControl } from 'features/app/providers/ScrollControlProvider'
import { Selector } from 'shared/components/Selector/'

import { AgreementPopup } from '../AgreementPopup'

import styles from './RegForm.module.scss'

interface IProps {
  withBorder?: boolean
  formTitleClassStyle?: string
  yellowArrowClassStyle?: string
}

export const RegForm = ({ withBorder, formTitleClassStyle, yellowArrowClassStyle }: IProps) => {
  const formClassName = cn(styles.form, { [styles.form__withBorder]: withBorder })
  const { toggleScroll } = useScrollControl()
  const [formValues, setFormValues] = useState({
    kidName: '',
    name: '',
    tel: '',
    school: '',
    isAgree: true
  })

  const [isShowAgree, setIsShowAgree] = useState(false)

  useEffect(() => {
    toggleScroll(!isShowAgree)
  }, [isShowAgree])

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    console.log('formValues', formValues)
  }

  const handleChange = (e: BaseSyntheticEvent) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleChangeSchool = (e: BaseSyntheticEvent) => {
    setFormValues({ ...formValues, school: e.target.value })
  }

  const handleChangeCheckbox = (e: BaseSyntheticEvent) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.checked })
  }

  const handleShowAgreement = (param: boolean) => () => setIsShowAgree(param)

  const handleChangePhone = (param: string) => {
    setFormValues({ ...formValues, tel: param })
  }

  const formTitleClassName = cn(styles.formTitle, formTitleClassStyle)

  const yellowArrowClassName = cn(styles.yellowArrowWrapper, yellowArrowClassStyle)

  return (
    <div className={styles.root}>
      <h6 className={formTitleClassName}>Запишитесь на просмотр</h6>
      <form className={formClassName} onSubmit={handleSubmit}>
        <input placeholder="Имя ребёнка" value={formValues.kidName} name="kidName" onChange={handleChange} className={styles.textInput} />
        <input placeholder="Ваше имя" value={formValues.name} name="name" onChange={handleChange} className={styles.textInput} />
        <Selector
          onChangePhone={handleChangePhone}
          selectorWrapperClassName={styles.phoneSelector}
          selectorInputClassName={styles.phoneSelectorInput}
          phoneSelectorMenuClassName={styles.phoneSelectorMenu}
        />
        <div className={styles.selectWrapper}>
          <span className={styles.arrow} />
          <select className={styles.selectInput} onChange={handleChangeSchool} value={formValues.school}>
            <option className={styles.option}>Выберите школу (необязательно)</option>
            <option value="festivalnaya">Спортивный комплекс «Речной», Фестивальная 4Б</option>
            <option value="studenyy">Студёный проезд, 1А строение 1</option>
            <option value="smolnaya">Смольная улица, 12</option>
            <option value="prishvina">Улица Пришвина, 20</option>
          </select>
        </div>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" name="isAgree" checked={formValues.isAgree} onChange={handleChangeCheckbox} />Я принимаю
          <span className={styles.agreement} onClick={handleShowAgreement(true)}>
            Условия соглашения
          </span>
          <span className={styles.checkboxMark} />
        </label>
        <div className={yellowArrowClassName}>
          <Image src="/images/YellowArrow.svg" width="99" height="99" alt="close" />
        </div>
        <button type="submit" className={styles.submitButton}>
          Записаться на просмотр
        </button>
      </form>
      {isShowAgree && <AgreementPopup handleClose={handleShowAgreement(false)} />}
    </div>
  )
}
