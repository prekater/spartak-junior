import cn from 'clsx'
import Image from 'next/image'

import { useNavigation } from 'features/app/providers/NavigationProvider'

import { useTestContext } from '../../providers/TestProvider'

import styles from './AdviceAndTest.module.scss'

const AdviceAndTest = () => {
  const { onChangeOpenTest } = useTestContext()
  const { adviceAndTestRef } = useNavigation()

  const wrapper = cn('wrapper', styles.wrapper)

  const root = cn('trim', styles.root)

  return (
    <section className={root} id="adviceAndTest" ref={adviceAndTestRef}>
      <div className={wrapper}>
        <div className={styles.contentAbout}>
          <h4 className={styles.title}>Сможет ли Ваш ребёнок заниматься футболом профессионально?</h4>
          <p className={styles.text}>
            Пройдите тест и получите рекомендации к тренировкам для Вашего ребенка + одно пробное занятие в футбольной школе Спартак.
            Длительность теста 1 минута
          </p>
          <button className={styles.buttonModal} onClick={() => onChangeOpenTest(true)}>
            Пройти тест
            <span className={styles.roundArrow}>
              <Image fill src="/images/round-arrow.svg" alt="round arrow" />
            </span>
          </button>
        </div>
        <div className={styles.contentBanner}>
          <Image fill src="/images/AdviceImage.png" alt="advice image" sizes="(max-width: 479.9px) 100vw, (min-width: 478px) 800px"/>
        </div>
      </div>
    </section>
  )
}

export default AdviceAndTest
