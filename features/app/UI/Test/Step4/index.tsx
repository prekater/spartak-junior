import Image from 'next/image'

import { CustomRadioButton } from '../CustomRadioButton'
import { IStep } from '../types'

import styles from './Step4.module.scss'

export const Step4 = ({ formValues, onChange }: IStep) => {
  return (
    <div className={styles.root}>
      <div className={styles.variantBlock}>
        <div className={styles.imageWrapper}>
          <Image src="/images/test/Forward.jpg" layout="fill" objectFit="contain" alt="forward" />
        </div>
        <CustomRadioButton value="Нападающий" formValues={formValues} onChange={onChange} name="position" />
      </div>
      <div className={styles.variantBlock}>
        <div className={styles.imageWrapper}>
          <Image src="/images/test/Midfielder.jpg" layout="fill" objectFit="contain" alt="forward" />
        </div>
        <CustomRadioButton value="Полузащитник" formValues={formValues} onChange={onChange} name="position" />
      </div>
      <div className={styles.variantBlock}>
        <div className={styles.imageWrapper}>
          <Image src="/images/test/Defender.jpg" layout="fill" objectFit="contain" alt="forward" />
        </div>
        <CustomRadioButton value="Защитник" formValues={formValues} onChange={onChange} name="position" />
      </div>
      <div className={styles.variantBlock}>
        <div className={styles.imageWrapper}>
          <Image src="/images/test/dontknow.jpg" layout="fill" objectFit="contain" alt="forward" />
        </div>
        <CustomRadioButton value="Не знаю" formValues={formValues} onChange={onChange} name="position" />
      </div>
    </div>
  )
}
