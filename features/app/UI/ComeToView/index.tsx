import React from 'react'

import cn from 'clsx'

import TitleBanner from 'shared/components/TitleBanner'

import { RegForm } from '../../../../shared/components/RegForm'
import { useNavigation } from '../../providers/NavigationProvider'

import styles from './ComeToView.module.scss'

const ComeToView = () => {
  const { addressRef } = useNavigation()

  return (
    <article className={styles.root} id="address" ref={addressRef}>
      <TitleBanner title="Приходите на просмотр" subtitle="Чтобы записаться, заполните форму" />
      <div className={styles.bannerContent}>
        <div className={styles.map}>
          <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" className={styles.mapLink}>
            Москва
          </a>
          <a
            href="https://yandex.ru/maps/213/moscow/?from=api-maps&ll=37.577154%2C55.882465&mode=usermaps&source=jsapi_2_1_79&um=constructor%3A90affdcd7f44dff273fa7028834d853246b29468b113565846834ab585291a85&utm_medium=mapframe&utm_source=maps&z=11"
            className={cn(styles.mapLink, styles.mapLink_otherTop)}
          >
            Яндекс Карты — транспорт, навигация, поиск мест
          </a>
          <iframe src="https://yandex.ru/map-widget/v1/-/CCUfzLdd2B" width="660" height="540" allowFullScreen className={styles.iframe} />
        </div>
        <div className={styles.formBlock}>
          <RegForm formTitleClassStyle={styles.formTitle} yellowArrowClassStyle={styles.formYellowArrow} />
          <div className={styles.curveBorder}>
            <img src="/images/Trim.svg" className={styles.trimImg} />
          </div>
        </div>
      </div>
    </article>
  )
}

export default ComeToView
