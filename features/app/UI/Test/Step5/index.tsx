import { CustomRadioButton } from '../CustomRadioButton'
import { IStep } from '../types'

import styles from './Step5.module.scss'

export const Step5 = ({ formValues, onChange }: IStep) => {
  return (
    <div className={styles.root}>
      <CustomRadioButton value="Сегодня" formValues={formValues} onChange={onChange} name="firstLesson" />
      <CustomRadioButton value="Завтра" formValues={formValues} onChange={onChange} name="firstLesson" />
      <CustomRadioButton value="Другой день" formValues={formValues} onChange={onChange} name="firstLesson" />
    </div>
  )
}
