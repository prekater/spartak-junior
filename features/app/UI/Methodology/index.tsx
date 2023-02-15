import Image from 'next/image'

import { useNavigation } from '../../providers/NavigationProvider'
import MethodDescription from './MethodDescription'

import styles from './Methodology.module.scss'

const Methodology = () => {
  const { methodRef } = useNavigation()

  return (
    <div id="method" ref={methodRef}>
      <section className={styles.root}>
        <div className={styles.wrapperContent}>
          <div className={styles.wrapperText}>
            <p className={styles.firstText}>Методика и тренерский состав</p>

            <p className={styles.secondText}>
              Во всех наших школах применяется методика, разработанная совместно со специалистами Академии футбольного клуба «Спартак», что
              позволяет обеспечивать всем ученикам максимально эффективный и профессиональный тренировочный процесс
            </p>
          </div>
          <div className={styles.wrapperImg}>
            <Image layout="fill" objectFit="contain" src="/images/Label.svg" />
          </div>
        </div>
      </section>
      <MethodDescription />
    </div>
  )
}

export default Methodology
