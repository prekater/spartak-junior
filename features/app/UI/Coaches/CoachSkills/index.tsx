import Image from 'next/image'

import styles from './CoachSkills.module.scss'

const CoachSkills = () => {
  return (
    <div className={styles.root}>
      <div className={styles.commonWrapper}>
        <div className={styles.wrapperFlexText}>
          <p className={styles.firstText}>
            Все тренеры наших школ регулярно проходят обучение и непрерывно повышают свою квалификацию. Они регулярно изучают вебинары от
            специалистов академии «Спартака», а также каждый месяц сдают контрольные тесты на предмет полученных знаний.
          </p>
          <p className={styles.secondText}>
            Сертификат академии является гарантией того, что тренер осуществляет обучение детей в соответствии с методикой академии ФК
            «Спартак» имени Федора Черенкова.
          </p>
          <p className={styles.thirdText}>
            Кроме того, родители имеют возможность оставить свой отзыв о работе тренеров и получить обратную связь по всем вопросам,
            касающимся тренировочного процесса.
          </p>
        </div>
        <div className={styles.wrapperImg}>
          <Image layout="fill" objectFit="contain" src="/images/coach2.png" />
        </div>
      </div>
    </div>
  )
}

export default CoachSkills
