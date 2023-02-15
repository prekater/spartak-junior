import Image from 'next/image'

import styles from './Step0.module.scss'

export const Step0 = () => {
  return (
    <div className={styles.root}>
      <Image src="/images/test/step0.jpg" alt="football test" fill  />
    </div>
  )
}
