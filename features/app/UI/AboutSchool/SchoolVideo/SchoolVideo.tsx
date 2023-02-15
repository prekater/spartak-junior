import { useEffect, useState } from 'react'

import Image from 'next/image'

import { useScrollControl } from 'features/app/providers/ScrollControlProvider'

import styles from './SchoolVideo.module.scss'

export const SchoolVideo = () => {
  const [isShowVideo, setisShowVideo] = useState(false)
  const { toggleScroll } = useScrollControl()

  useEffect(() => {
    toggleScroll(!isShowVideo)
  }, [isShowVideo])

  const handleShowVideo = () => {
    setisShowVideo(!isShowVideo)
  }
  return (
    <>
      <button className={styles.showVideoBtn} onClick={handleShowVideo}>
        <Image src="/images/rhomb.svg" width={90} height={50} alt="" />
        <span className={styles.textBtn}>Смотреть видео</span>
      </button>

      {isShowVideo && (
        <>
          <div className={styles.overlay} onClick={handleShowVideo} />
          <button className={styles.closeBtn} onClick={handleShowVideo} />
          <section className={styles.modalWrapper}>
            <div className={styles.thumb}>
              <iframe
                src="https://www.youtube.com/embed/qLg83POZc6w"
                title="«Спартак Юниор» поздравляет с Днем защиты детей!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </section>
        </>
      )}
    </>
  )
}
