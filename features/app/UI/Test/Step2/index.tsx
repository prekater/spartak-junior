import { CustomRadioButton } from '../CustomRadioButton'
import { IStep } from '../types'

import styles from './Step2.module.scss'

export const Step2 = ({ formValues, onChange }: IStep) => {
  return (
    <div className={styles.root}>
      <CustomRadioButton value="Тренироваться для общего развития" formValues={formValues} onChange={onChange} name="future" />
      <CustomRadioButton value="Стать профессиональным футболистом" formValues={formValues} onChange={onChange} name="future" />
      <CustomRadioButton value="Решим потом" formValues={formValues} onChange={onChange} name="future" />
    </div>
  )
}
