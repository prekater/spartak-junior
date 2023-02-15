import { CustomRadioButton } from '../CustomRadioButton'
import { IStep } from '../types'

import styles from './Step1.module.scss'

export const Step1 = ({ formValues, onChange }: IStep) => {
  return (
    <div className={styles.root}>
      <CustomRadioButton value="3-5 лет" formValues={formValues} onChange={onChange} name="age" />
      <CustomRadioButton value="6-8 лет" formValues={formValues} onChange={onChange} name="age" />
      <CustomRadioButton value="9-12 лет" formValues={formValues} onChange={onChange} name="age" />
      <CustomRadioButton value="Больше 12 лет" formValues={formValues} onChange={onChange} name="age" />
    </div>
  )
}
