import React, { BaseSyntheticEvent, useState } from 'react'

import clsx from 'clsx'

import { useNavigation } from 'features/app/providers/NavigationProvider'
import TitleBanner from 'shared/components/TitleBanner/'

import { FAQItem } from './FAQItem'
import { SendRequest } from './SendRequest'
import { useMenuQuestions } from './useMenuQuestions'

import styles from './FAQ.module.scss'

const FAQ = () => {
  const [value, setValue] = useState('')
  const [isEmptyValue, setIsEmptyValue] = useState(false)
  const { faqRef } = useNavigation()

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setValue(event?.target.value)

  const hadleClick = (e: BaseSyntheticEvent) => {
    if (value) {
      e.preventDefault()
      setIsEmptyValue(!isEmptyValue)
    }
    e.preventDefault()
  }

  const handleSubmit = (e: BaseSyntheticEvent) => {
    console.log(value)
    e.preventDefault()
  }

  const circle = clsx(styles.circle, styles.circle_stepOne, { [styles.circle_stepTwo]: isEmptyValue })
  const buttonForm = clsx(styles.buttonForm, { [styles.buttonForm_forward]: !isEmptyValue }, { [styles.buttonForm_back]: isEmptyValue })
  const submitForm = clsx(styles.buttonForm, styles.buttonForm_submit, { [styles.buttonForm_hidden]: !isEmptyValue })

  return (
    <div className={styles.root} id="faq" ref={faqRef}>
      <TitleBanner title="Вопросы родителей" subtitle="Если не найдете ответ, задайте свой вопрос через форму" />
      <section className={styles.faqWrapper}>
        <ul className={styles.list}>
          {useMenuQuestions.map(props => (
            <FAQItem key={props.id} {...props} />
          ))}
        </ul>
        <div className={styles.textFormWrapper}>
          <p className={styles.titleForm}>Не нашли ответ на свой вопрос? Задайте его через форму ниже:</p>
          <span className={styles.subTitleForm}>Среднее время ответа 5-7 минут</span>
        </div>
        <form className={styles.questionForm} onSubmit={handleSubmit}>
          {!isEmptyValue && (
            <textarea placeholder="Напишите Ваш вопрос..." className={styles.questionArea} value={value} onChange={handleChange} />
          )}
          {isEmptyValue && <SendRequest />}
          <span className={clsx(styles.errorText, styles.hide)}>Пожалуйста, заполните все обязательные поля</span>
          <div className={clsx(styles.errorBlock, styles.hide)}>Пожалуйста, заполните все обязательные поля</div>
          <div className={clsx(styles.success, styles.hide)}>
            Спасибо! Ваш вопрос получен, обычно мы отвечаем через 5-7 минут. Если вы оставили заявку в нерабочее время, мы сразу же ответим
            Вам в начале следующего рабочего дня.
          </div>
          <div className={styles.buttonFormWrapper}>
            <div className={styles.paginationWrapper}>
              <span className={styles.pagination}>{isEmptyValue ? 2 : 1}</span>
              <span className={styles.pagination}>/</span>
              <span className={styles.pagination}>2</span>
              <div className={circle}>
                <div className={styles.innerCircle} />
              </div>
            </div>
            <button type="submit" className={buttonForm} onClick={hadleClick}>
              <span className={styles.buttonText}>{isEmptyValue ? 'Назад' : 'Задать вопрос'}</span>
            </button>
            <button className={submitForm} type="submit" value="Получить ответ">
              <span>Получить ответ</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default FAQ
