import { BaseSyntheticEvent, useRef, useState } from 'react'

import cn from 'clsx'
import Image from 'next/image'

import styles from './Settings.module.scss'

const enum EPopup {
  IS_SETTINGS = 'settings',
  IS_EMAIL_SEND = 'email'
}

export const Settings = () => {
  const [email, setEmail] = useState('')

  const handleChange = (e: BaseSyntheticEvent) => {
    setEmail(e.target.value)
  }

  const [popupState, setPopupState] = useState(EPopup.IS_SETTINGS)

  const [isShowSettings, setIsShowSettings] = useState(false)

  const popupRef = useRef(null)

  const handleChangePopup = (param: EPopup) => (e: BaseSyntheticEvent) => {
    e.stopPropagation()
    setPopupState(param)
  }

  const handleShowSettings = () => {
    if (isShowSettings) {
      setIsShowSettings(false)
      setPopupState(EPopup.IS_SETTINGS)
    } else {
      setIsShowSettings(true)
    }
  }

  const handleCloseSettings = (e: BaseSyntheticEvent) => {
    e.stopPropagation()
    setIsShowSettings(false)
  }

  return (
    <button type="button" className={styles.bottomButton} onClick={handleShowSettings}>
      <Image width={20} height={20} alt="settings" src="/images/chat/settings.svg" />
      {isShowSettings && (
        <>
          <div
            className={cn(styles.settingsPopup, { [styles.settingsPopup__sendEmail]: popupState === EPopup.IS_EMAIL_SEND })}
            ref={popupRef}
          >
            {popupState === EPopup.IS_SETTINGS && (
              <>
                <button type="button" onClick={handleChangePopup(EPopup.IS_EMAIL_SEND)} className={styles.settingsPopup_item}>
                  Отправить на почту
                </button>
                <button type="button" className={styles.settingsPopup_item} onClick={handleCloseSettings}>
                  Закрыть диалог
                </button>
              </>
            )}
            {popupState === EPopup.IS_EMAIL_SEND && (
              <>
                <div className={styles.sendEmailForm}>
                  <input type="text" className={styles.input} placeholder="E-mail" name="name" value={email} onChange={handleChange} />
                  <button className={styles.button}>Отправить</button>
                </div>
              </>
            )}
          </div>
          <div className={styles.settingsPopup_corner}>
            <Image width={36} height={28} alt="" src="/images/chat/corner.svg" className={styles.settingsPopup_cornerImg} />
          </div>
          <div className={cn(styles.settingsPopup_corner, styles.settingsPopup_corner__withShadow)}>
            <Image width={36} height={28} alt="" src="/images/chat/corner.svg" className={styles.settingsPopup_cornerImg} />
          </div>
        </>
      )}
    </button>
  )
}
