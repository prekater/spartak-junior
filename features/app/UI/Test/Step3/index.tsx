import { CustomRadioButton } from '../CustomRadioButton'
import { IStep } from '../types'

import styles from './Step3.module.scss'

export const Step3 = ({ formValues, onChange }: IStep) => {
  return (
    <div className={styles.root}>
      <CustomRadioButton value="Сейчас занимается в секции" formValues={formValues} onChange={onChange} name="skill" />
      <CustomRadioButton value="Занимался в футбольной школе / другой секции" formValues={formValues} onChange={onChange} name="skill" />
      <CustomRadioButton value="Играет в футбол во дворе" formValues={formValues} onChange={onChange} name="skill" />
      <CustomRadioButton value="Нет подготовки, подбираем секцию" formValues={formValues} onChange={onChange} name="skill" />
    </div>
  )
}
