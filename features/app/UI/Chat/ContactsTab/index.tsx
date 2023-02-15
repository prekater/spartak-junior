import { useEffect, useState } from 'react'

import cn from 'clsx'

import styles from './ContactsTab.module.scss'

export const ContactsTab = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      typeof window !== 'undefined' && setScreenWidth(window.innerWidth)
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isSmallScreen = screenWidth < 400

  const addresses = [
    'г. Москва, ул. Фестивальная, 4Б, метро Речной вокзал. Телефон: +7 (495) 877-31-15',
    'г. Москва, ул. Флотская 7 стр.1 метро Речной вокзал. Телефон: +7 (495) 877-31-15',
    'г. Москва, ул. Большая Академическая, 38 стр.2. Телефон: +7 (495) 877-31-15'
  ]

  const contactsCount = addresses.length

  const handleBack = () => {
    if (activeSlide !== 0) {
      setActiveSlide(activeSlide - 1)
    }
  }

  const handleForward = () => {
    if (activeSlide !== contactsCount - 1) {
      setActiveSlide(activeSlide + 1)
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.mapWrapper}>Здесь будет карта</div>
      <span className={styles.slider_itemText}>{`${activeSlide + 1}/${contactsCount}`}</span>
      <div className={styles.slider}>
        <button className={styles.slider_arrow} onClick={handleBack} disabled={activeSlide === 0} type="button">
          <img src="/images/icon/sliderArrow.svg" alt="back" width="9px" height="16px" />
        </button>
        <div
          className={styles.slider_itemsWrapper}
          style={{
            left: `${-(activeSlide * (isSmallScreen ? 320 : 385))}px`,
            width: `${contactsCount * 100}%`
          }}
        >
          {addresses.map((item, index) => (
            <div key={index} className={styles.slider_item}>
              {item}
            </div>
          ))}
        </div>
        <button
          className={cn(styles.slider_arrow, styles.slider_arrow__forward)}
          onClick={handleForward}
          disabled={activeSlide === contactsCount - 1}
          type="button"
        >
          <img src="/images/icon/sliderArrow.svg" alt="forward" width="9px" height="16px" />
        </button>
      </div>
      <div className={styles.socials}>
        <a href="https://vk.com/public200787566" target="_blank" rel="noreferrer" className={styles.socials_link}>
          <img src="/images/icon/VK.svg" alt="VK" width="32px" height="32px" className={styles.socials_icon} />
        </a>
        <a href="https://wa.me/79164664677" target="_blank" rel="noreferrer" className={styles.socials_link}>
          <img src="/images/icon/WhatsApp.svg" alt="WhatsApp" width="32px" height="32px" className={styles.socials_icon} />
        </a>
        <a href="https://www.instagram.com/spartak_moscow_sao/" target="_blank" rel="noreferrer" className={styles.socials_link}>
          <img src="/images/icon/IG.svg" alt="Instagram" width="32px" height="32px" className={styles.socials_icon} />
        </a>
      </div>
    </div>
  )
}
