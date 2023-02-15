import cn from 'clsx'
import Image from 'next/image'

import CoachSkills from './CoachSkills'

import styles from './Coaches.module.scss'

const Coaches = () => {
  const root = cn('trim', styles.root)
  return (
    <>
      <div className={root}>
        <div className={styles.commonWrapper}>
          <div className={styles.cBlock}>
            <div className={styles.cImageBlock}>
              <Image width={650} height={417} src="/images/coach1.png"  alt={""}/>
            </div>
            <div className={styles.cTextBlock}>
              <p className={styles.cText}>
                Обучением детей занимаются преданные своему делу профессионалы. Все тренеры в нашей школе не только имеют профессиональное
                образование , но и прошли обучение и сертифицированы академией ФК «Спартак» для работы в качестве тренера школы «Спартак
                Юниор»
              </p>
            </div>
          </div>
        </div>
      </div>
      <CoachSkills />
    </>
  )
}

export default Coaches
