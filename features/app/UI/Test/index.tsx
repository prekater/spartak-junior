import { useEffect, useState, BaseSyntheticEvent } from 'react'

import cn from 'clsx'
import { E164Number, isValidPhoneNumber } from 'libphonenumber-js'

import { useScrollControl } from '../../providers/ScrollControlProvider'
import { useTestContext } from '../../providers/TestProvider'
import { BackArrow } from '../Icons/BackArrow'
import { questionDescription, questionTitle } from './helpers'
import { Step0 } from './Step0'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'
import { Step4 } from './Step4'
import { Step5 } from './Step5'
import { Step6 } from './Step6'
import { TTestForm } from './types'

import styles from './Test.module.scss'

const Test = () => {
  const { testIsOpen, onChangeOpenTest } = useTestContext()
  const { toggleScroll } = useScrollControl()

  const [formValues, setFormValues] = useState<TTestForm>({
    age: '',
    future: '',
    skill: '',
    position: '',
    firstLesson: '',
    name: '',
    phone: '',
    isAgree: true
  })

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    console.log('formValues', formValues)
  }

  const handleChange = (e: BaseSyntheticEvent) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleChangeCheckbox = (e: BaseSyntheticEvent) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.checked })
  }

  const handleChangePhone = (param: E164Number | undefined) => {
    setFormValues({ ...formValues, phone: param })
  }

  const [step, setStep] = useState<number>(0)

  const handlePrev = () => setStep(prevState => prevState - 1)

  const handleNext = () => setStep(prevState => prevState + 1)

  useEffect(() => {
    toggleScroll(!testIsOpen)
  }, [testIsOpen])

  const makeStepComponent = (step: number) => {
    switch (step) {
      case 0:
      default:
        return <Step0 />
      case 1:
        return <Step1 formValues={formValues} onChange={handleChange} />
      case 2:
        return <Step2 formValues={formValues} onChange={handleChange} />
      case 3:
        return <Step3 formValues={formValues} onChange={handleChange} />
      case 4:
        return <Step4 formValues={formValues} onChange={handleChange} />
      case 5:
        return <Step5 formValues={formValues} onChange={handleChange} />
      case 6:
        return (
          <Step6
            formValues={formValues}
            onChange={handleChange}
            onChangePhone={handleChangePhone}
            onChangeCheckbox={handleChangeCheckbox}
          />
        )
    }
  }

  const makeNextBtnDisable = () => {
    switch (true) {
      case step === 0:
        return false
      case step === 1:
        return !formValues.age
      case step === 2:
        return !formValues.future
      case step === 3:
        return !formValues.skill
      case step === 4:
        return !formValues.position
      case step === 5:
        return !formValues.firstLesson
      default:
        return true
    }
  }

  const makeSubmitButtonDisable = () => {
    return !(formValues.phone && isValidPhoneNumber(formValues.phone) && formValues.isAgree)
  }

  const contentWrapperClassName = cn(styles.contentWrapper, { [styles.contentWrapper__center]: step === 0 })

  return (
    <>
      {testIsOpen && (
        <div className={styles.root}>
          <div className={styles.progressBar}>
            <div className={styles.passed} style={{ width: `calc((100% / 6) * ${step})` }} />
          </div>
          <button onClick={() => onChangeOpenTest(false)} className={styles.closeButton} />
          {step > 1 && (
            <button onClick={handlePrev} className={styles.prevButton}>
              <BackArrow />
            </button>
          )}
          <form className={contentWrapperClassName} onSubmit={handleSubmit}>
            {step > 0 && step < 6 && <span className={styles.stepNumber}>Вопрос {step} из 5</span>}
            <h2 className={styles.question}>{questionTitle[step as keyof typeof questionTitle]}</h2>
            <h6 className={styles.description}>{questionDescription[step as keyof typeof questionDescription]}</h6>
            {makeStepComponent(step)}
            {step === 6 ? (
              <button className={styles.nextButton} disabled={makeSubmitButtonDisable()} type="submit">
                Получить
              </button>
            ) : (
              <button onClick={handleNext} className={styles.nextButton} disabled={makeNextBtnDisable()} type="button">
                {step === 0 ? 'Пройти тест' : 'Далее'}
              </button>
            )}
          </form>
        </div>
      )}
    </>
  )
}

export default Test
