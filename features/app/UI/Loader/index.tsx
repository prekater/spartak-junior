import { useEffect, useState } from 'react'

import Image from 'next/image'

import { useScrollControl } from '../../providers/ScrollControlProvider'

import styles from './Loader.module.scss'

const Loader = () => {
  const [isLoader, setIsLoader] = useState(true)

  const { toggleScroll } = useScrollControl()

  useEffect(() => {
    toggleScroll(!isLoader)
  }, [isLoader])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoader(false)
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      {isLoader && (
        <div className={styles.root}>
          <div className={styles.logoBlock}>
            <Image src="/images/stars.svg" width={100} height={50} alt="Спартак" />
            <div className={styles.logoBlock_logoWrapper}>
              <Image src="/images/logo_spartak.svg" width={150} height={82} alt="Спартак" className={styles.logoBlock_logo} />
            </div>
            <Image src="/images/title.svg" width={110} height={43} alt="Спартак" />
          </div>
          <div className={styles.container}>
            <div className={styles.typedOut}>Загружаю сайт, подождите</div>
          </div>
          <div className={styles.leftRedBlock} />
          <div className={styles.rightRedBlock} />
        </div>
      )}
    </>
  )
}

export default Loader
