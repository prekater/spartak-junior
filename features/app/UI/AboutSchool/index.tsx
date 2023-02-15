import { useState } from 'react'

import cn from 'clsx'
import Image from 'next/image'

import FreeLessonButton from 'shared/components/FreeLessonButton'
import { Modal } from 'shared/components/Modal/'
import { Selector } from 'shared/components/Selector/'

import { SchoolVideo } from './SchoolVideo/SchoolVideo'

import styles from './AboutSchool.module.scss'

const AboutSchool = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  const wrapper = cn('wrapper', styles.wrapper)
  const root = cn('trim', styles.root)
  return (
    <section className={root}>
      <Image src="/images/MainFootball.jpg" fill alt="Spartak junior" className={styles.heroImage}/>
      <div className={wrapper}>
        <div className={styles.content}>
          <h3 className={styles.title}>Футбольная школа</h3>
          <div className={styles.imageWrapper}>
            <Image src="/images/SchoolName.svg" fill alt="Спартак Юниор" />
          </div>
          <h4 className={styles.subTitle}>
            Стартовала комплектация тренировочных групп на сезон 2022-2023. Количество мест в группах ограничено. Оставь заявку прямо
            сейчас!
          </h4>
          <FreeLessonButton onClick={handleShowModal} title="ЗАПИСАТЬСЯ НА ТРЕНИРОВКУ" className={styles.freeLesson} />
          <SchoolVideo />
        </div>
      </div>
      <Modal
        title="Запись в группы на сезон 2022-2023"
        subTitle="Стартовала комплектация тренировочных групп на сезон 2022-2023. Количество мест в группах ограничено. Оставь заявку прямо сейчас!"
        onClose={handleShowModal}
        isShowModal={showModal}
      >
        <form className={styles.form}>
          <input className={styles.input} placeholder="Имя ребёнка" />
          <input className={styles.input} placeholder="Ваше имя" />
          <Selector selectorInputClassName={styles.select} selectorWrapperClassName={styles.selectWrapper} />
          <div className={cn(styles.errorBlock, styles.hide)}>Пожалуйста, заполните все обязательные поля</div>
          <button type="submit" className={cn(styles.buttonForm, styles.buttonForm_submit)}>
            Оставить заявку
          </button>
        </form>
      </Modal>
    </section>
  )
}

export default AboutSchool
