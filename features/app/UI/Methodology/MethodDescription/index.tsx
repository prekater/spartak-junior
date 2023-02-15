import Image from 'next/image'

import styles from './MethodDescription.module.scss'

const MethodDescription = () => {
  return (
    <section className={styles.root}>
      <div className={styles.commonWrapper}>
        <div className={styles.wrapperFlexText}>
          <p className={styles.firstText}>
            Методика учитывает возрастные особенности детей и обеспечивает их всестороннее развитие. Дети учатся общению со сверстниками,
            работе в команде, дисциплине, умению справляться с трудностями.
          </p>
          <p className={styles.secondText}>
            Помимо занятий с тренером, наши ученики получают домашние задания через личный кабинет, таким образом их обучение и развитие
            проходит на регулярной основе и не ограничивается только временем тренировок.
          </p>
        </div>
        <div className={styles.wrapperImg}>
          <Image layout="fill" objectFit="contain" src="/images/fight.png" sizes="(max-width: 1199.9px) 600px, (min-width: 1200px) 750px"  alt={""}/>
        </div>
      </div>
    </section>
  )
}

export default MethodDescription
