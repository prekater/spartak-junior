import { useState, useEffect } from 'react'

import cn from 'clsx'
import Image from 'next/image'

import { useScrollControl } from 'features/app/providers/ScrollControlProvider'

import { AgreementPopup } from '../../../../shared/components/AgreementPopup'
import { RegForm } from '../../../../shared/components/RegForm'

import styles from './Footer.module.scss'

const Footer = () => {
  const [isShowPolitics, setIsShowPolitics] = useState(false)
  const handleShowPolitics = (param: boolean) => () => setIsShowPolitics(param)
  const { toggleScroll } = useScrollControl()

  useEffect(() => {
    toggleScroll(!isShowPolitics)
  }, [isShowPolitics])

  const rightLogoClassName = cn(styles.animatedLogo, styles.animatedLogo__right)

  return (
    <footer className={styles.root}>
      <div className={styles.curveBorder}>
        <img src="/images/Trim.svg" className={styles.trimImg} />
      </div>
      <img src="/images/Label.svg" alt="spartak" className={styles.logo} />
      <div className={styles.wrapperFooterContent}>
        <img src="/images/Label.svg" alt="spartak" className={styles.animatedLogo} />
        <RegForm withBorder />
        <img src="/images/Label.svg" alt="spartak" className={rightLogoClassName} />
      </div>

      <div className={styles.footer}>
        <div className={styles.textWrapper}>
          © «Спартак-Юниор» Москва ИНН: 773371418316
          <br />
          <span className={styles.politicsLink} onClick={handleShowPolitics(true)}>
            Политика конфиденциальности
          </span>
        </div>
        <a href="https://vk.com/futbolnaya_shkola_spartak_junior" target="_blank" rel="noreferrer">
          <Image src="/images/social/VK.svg" width="30" height="30" layout="fixed" alt="Футбольная школа «Спартак Юниор»" />
        </a>
        {isShowPolitics && <AgreementPopup handleClose={handleShowPolitics(false)} />}
      </div>
    </footer>
  )
}

export default Footer
