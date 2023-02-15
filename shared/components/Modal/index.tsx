import { ReactElement, useState, useEffect } from 'react'

import { useScrollControl } from 'features/app/providers/ScrollControlProvider'
import { AgreementPopup } from 'shared/components/AgreementPopup'

import styles from './Modal.module.scss'

interface IModal {
  title: string
  subTitle: string
  onClose: () => void
  isShowModal: boolean
  children: ReactElement
}

export const Modal = ({ children, title, subTitle, onClose, isShowModal }: IModal) => {
  const [isShowPolitics, setIsShowPolitics] = useState(false)
  const { toggleScroll } = useScrollControl()

  const handleShowPolitics = () => {
    setIsShowPolitics(!isShowPolitics)
  }

  const handleClosePolitics = () => {
    handleShowPolitics()
    onClose()
  }

  useEffect(() => {
    toggleScroll(!isShowModal)
  }, [isShowModal])

  return (
    <>
      {isShowModal && (
        <>
          {isShowPolitics ? (
            <AgreementPopup handleClose={handleClosePolitics} />
          ) : (
            <>
              <div className={styles.overlay} onClick={onClose} />
              <button className={styles.closeBtn} onClick={onClose} />
              <section className={styles.modalWrapper}>
                <h2 className={styles.title}>{title}</h2>
                <span className={styles.subTitle}>{subTitle}</span>
                <div className={styles.formWrapper}>{children}</div>
                <span className={styles.privacy}>
                  Я принимаю{' '}
                  <a className={styles.privacyLink} onClick={handleShowPolitics}>
                    Условия передачи информации
                  </a>
                </span>
              </section>
            </>
          )}
        </>
      )}
    </>
  )
}
