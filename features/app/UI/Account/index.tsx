import { useState } from 'react'

import cn from 'clsx'

import { useNavigation } from 'features/app/providers/NavigationProvider'
import FreeLessonButton from 'shared/components/FreeLessonButton'
import { Modal } from 'shared/components/Modal/'
import { Selector } from 'shared/components/Selector/'

import Advantages from './Advantages'

import styles from './Account.module.scss'

const Account = () => {
  const [showModal, setShowModal] = useState(false)
  const { accountRef } = useNavigation()

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  const wrapper = cn('wrapper', styles.wrapper)

  return (
    <>
      <div className={styles.root} ref={accountRef} id="account">
        <div className={wrapper}>
          <h2 className={styles.title}>Ваш личный кабинет</h2>
          {/*<Advantages />*/}
          <FreeLessonButton onClick={handleShowModal} title="БЕСПЛАТНАЯ ТРЕНИРОВКА" className={styles.freeLesson} />
        </div>
      </div>
      <Modal
        title="Записаться на пробное занятие"
        subTitle="Просто заполните форму, а мы перезвоним и уточним все детали"
        onClose={handleShowModal}
        isShowModal={showModal}
      >
        <form className={styles.form}>
          <input className={styles.input} placeholder="Имя ребёнка" />
          <input className={styles.input} placeholder="Ваше имя" />
          <Selector selectorInputClassName={styles.select} selectorWrapperClassName={styles.selectWrapper} />
          <div className={cn(styles.errorBlock, styles.hide)}>Пожалуйста, заполните все обязательные поля</div>
          <button type="submit" className={cn(styles.buttonForm, styles.buttonForm_submit)}>
            Записаться бесплатно
          </button>
        </form>
      </Modal>
    </>
  )
}
export default Account
