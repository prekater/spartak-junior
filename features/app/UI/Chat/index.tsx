import { useState } from 'react'

import cn from 'clsx'
import Image from 'next/image'

import { ChatTabIcon } from '../Icons/ChatTabIcon'
import { ContactsTabIcon } from '../Icons/ContactsTabIcon'
import { FormTabIcon } from '../Icons/FormTabIcon'
import { ChatTab } from './ChatTab'
import { ContactsTab } from './ContactsTab'
import { FormTab } from './FormTab'

import styles from './Chat.module.scss'

interface IProps {
  onChangeOpenChat: () => void
}

enum EChatTabs {
  CHAT = 'chat',
  FORM = 'form',
  CONTACTS = 'contacts'
}

const Chat = ({ onChangeOpenChat }: IProps) => {
  const [activeTab, setActiveTab] = useState<EChatTabs>(EChatTabs.CHAT)

  const handleClickTab = (param: EChatTabs) => () => setActiveTab(param)

  return (
    <div className={styles.commonWrapper}>
      <div className={styles.root}>
        <button onClick={onChangeOpenChat} className={styles.closeButton}></button>
        +7 (495) 877-31-15
        <div className={styles.tabs}>
          <div
            className={cn(styles.tabs_item, { [styles.tabs_item__active]: activeTab === EChatTabs.CHAT })}
            onClick={handleClickTab(EChatTabs.CHAT)}
          >
            <span className={styles.tabTextWrapper}>
              <ChatTabIcon />
              <span className={styles.tabText}>Чат</span>
            </span>
          </div>
          <div
            className={cn(styles.tabs_item, { [styles.tabs_item__active]: activeTab === EChatTabs.FORM })}
            onClick={handleClickTab(EChatTabs.FORM)}
          >
            <span className={styles.tabTextWrapper}>
              <FormTabIcon />
              <span className={styles.tabText}>Заявка</span>
            </span>
          </div>
          <div
            className={cn(styles.tabs_item, { [styles.tabs_item__active]: activeTab === EChatTabs.CONTACTS })}
            onClick={handleClickTab(EChatTabs.CONTACTS)}
          >
            <span className={styles.tabTextWrapper}>
              <ContactsTabIcon />
              <span className={styles.tabText}>Контакты</span>
            </span>
          </div>
          <span
            className={cn(
              styles.tabUnderline,
              { [styles.tabUnderline__right]: activeTab === EChatTabs.CONTACTS },
              { [styles.tabUnderline__center]: activeTab === EChatTabs.FORM },
              { [styles.tabUnderline__left]: activeTab === EChatTabs.CHAT }
            )}
          />
        </div>
        {activeTab === EChatTabs.CHAT && <ChatTab />}
        {activeTab === EChatTabs.FORM && <FormTab />}
        {activeTab === EChatTabs.CONTACTS && <ContactsTab />}
      </div>
      <div className={styles.corner}>
        <Image width={36} height={28} alt="" src="/images/chat/corner.svg" className={styles.cornerImg} />
      </div>
      <div className={cn(styles.corner, styles.corner__withShadow)}>
        <Image width={36} height={28} alt="" src="/images/chat/corner.svg" className={styles.cornerImg} />
      </div>
    </div>
  )
}

export default Chat
