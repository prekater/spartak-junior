import { useState, useEffect } from 'react'
import dynamic from "next/dynamic";

import cn from 'clsx'

import FreeLessonButton from 'shared/components/FreeLessonButton'
import { Selector } from 'shared/components/Selector/'

import Logo from './components/Logo'
import Menu from './components/Menu'
import Phone from './components/Phone'

import styles from './Header.module.scss'

const Modal = dynamic(() => import('shared/components/Modal'), {
  ssr: false,
});

const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [isFixed, setIsFixed] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  const wrapper = cn('wrapper', styles.wrapper)

  const header = cn(styles.root, {
    [styles.root_fixed]: isFixed
  })

  const navBarBtn = cn(styles.navBarBtn, { [styles.navBarBtn_close]: isOpen })

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    const showHeader = () => {
      if (window.scrollY > 100) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', showHeader)
    return () => window.removeEventListener('scroll', showHeader)
  }, [isOpen])

  return (
    <>
      {isFixed && <div className={styles.fixed} />}
      <header id="header" className={header}>
        <div className={wrapper}>
          <Logo isFixed={isFixed} />
          <div className={styles.navWrapper}>
            <Menu />
            <Phone />
            <FreeLessonButton onClick={handleShowModal} title="Пробное занятие" className={styles.freeLesson} />
          </div>
          <button className={navBarBtn} onClick={handleClick} />
        </div>
      </header>
      {isOpen && (
        <div className={styles.modalNavBar}>
          <Menu onClose={handleClick} />
          <Phone />
        </div>
      )}
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

export default Header
