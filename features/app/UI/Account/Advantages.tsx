import React from 'react'

import cn from 'clsx'

import { useMedia } from 'features/app/hooks/useMedia'

import AdvantageItem from './AdvantageItem'

import styles from './Advantages.module.scss'
import Image from "next/image";

interface IProps {
  title: string
  text: string
  icon: string
}

const arrayItems: IProps[] = [
  {
    title: 'Фото отчеты',
    text: 'Смотрите фото и видео отчеты с прошедших турниров',
    icon: '1'
  },
  {
    title: 'Уведомления',
    text: 'Получайте напоминания о предстоящих тренировках',
    icon: '2'
  },
  {
    title: 'Онлайн оплата',
    text: 'Оплачивайте абонемент картой со смартфона',
    icon: '3'
  },
  {
    title: 'Домашние задания',
    text: 'Получайте и выполняйте домашние задания от тренера',
    icon: '4'
  },
  {
    title: 'Методика',
    text: 'Изучайте образовательные материалы',
    icon: '5'
  },
  {
    title: 'Связь с директором',
    text: 'Оставьте свои пожелания директору филиала',
    icon: '6'
  }
]

const Advantages = () => {
  const lg = useMedia(`(max-width: ${960 - 0.1}px)`)

  const blockStyle = cn(styles.blocks, styles.blocks_right)

  return (
    <div className={styles.root}>
      <div className={styles.blocks}>
        {arrayItems.slice(0, 3).map((item, index) => (
          <AdvantageItem key={index} {...item} type={lg ? 'left' : 'right'} />
        ))}
      </div>
      <div className={styles.imageWrapper}>
          <Image
              fill
              src="/images/Mobile.png"
              alt="advantages"
              className={styles.image}
              sizes="(max-width: 959.9px) 640px, (min-width: 960px) 540px"
          />
      </div>
      <div className={blockStyle}>
        {arrayItems.slice(3, 6).map((item, index) => (
          <AdvantageItem key={index} {...item} type="left" />
        ))}
      </div>
    </div>
  )
}

export default Advantages
