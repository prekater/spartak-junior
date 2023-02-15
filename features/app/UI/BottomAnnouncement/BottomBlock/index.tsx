import { useEffect, useState } from 'react'

import cn from 'clsx'

import styles from './BottomBlock.module.scss'

interface IProps {
  onShowModal: () => void
}

export const BottomBlock = ({ onShowModal }: IProps) => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsShow(window.scrollY >= 500)

    addEventListener('scroll', handleScroll)
    return () => {
      removeEventListener('scroll', handleScroll)
    }
  }, [])

  const buttonClassName = cn(styles.root, { [styles.root_shown]: isShow })

  return (
    <div className={buttonClassName}>
      <span className={styles.text}>
        Стартовала комплектация тренировочных групп на сезон 2022-2023. Количество мест в группах ограничено!
      </span>
      <button className={styles.button} onClick={onShowModal} type="button">
        Записаться на просмотр
      </button>
    </div>
  )
}
