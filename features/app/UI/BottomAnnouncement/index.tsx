import { useState } from 'react'
import dynamic from "next/dynamic";

import cn from 'clsx'

import { Selector } from 'shared/components/Selector'
import { BottomBlock } from './BottomBlock'

import styles from './BottomAnnouncement.module.scss'

const Modal = dynamic(() => import('shared/components/Modal'), {
    ssr: false,
});

export const BottomAnnouncement = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <BottomBlock onShowModal={handleShowModal} />
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
    </>
  )
}
