import React, { useRef } from 'react'

import clsx from 'clsx'
import cn from 'clsx'
import { useSelect } from 'downshift'

import { Input } from '../Input'
import { useCountryList, ICountryList } from './useCountryList'

import styles from './Selector.module.scss'
import Image from "next/image";

const itemToString = (useCountryList: ICountryList | null) => {
  return useCountryList ? useCountryList.countryCode : ''
}

interface IProps {
  onChangePhone?: (param: string) => void
  selectorWrapperClassName?: string
  selectorInputClassName?: string
  phoneSelectorMenuClassName?: string
}

export const Selector = ({ onChangePhone, selectorWrapperClassName, selectorInputClassName, phoneSelectorMenuClassName }: IProps) => {
  const { isOpen, selectedItem, getToggleButtonProps, getMenuProps, highlightedIndex, getItemProps } = useSelect({
    items: useCountryList,
    itemToString
  })

  const ulRef = useRef(null)

  const selectorWrapperStyle = cn(styles.root, selectorWrapperClassName)

  const selectorInputStyle = cn(styles.selectWrapper, selectorInputClassName)

  const selectorMenuStyle = cn(styles.menu, phoneSelectorMenuClassName)

  return (
    <div className={selectorWrapperStyle}>
      <div className={selectorInputStyle}>
        <button className={styles.selectButton} type="button" {...getToggleButtonProps()}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={selectedItem ? selectedItem.icon : '/images/flags/russia.svg'} className={styles.flag} alt={selectedItem?.title || 'flag'} width='18px' height="13px"/>
          <span className={styles.arrowButton} />
          {selectedItem ? itemToString(selectedItem) : '+7'}
        </button>
        <Input
          placeholder={selectedItem ? selectedItem.placeholder : '(999) 999-99-99'}
          onChangePhone={onChangePhone}
          phoneCode={selectedItem?.countryCode || '+7'}
        />
      </div>
      <span className={clsx(styles.errorText, styles.hide)}>Обязательное поле</span>
      {isOpen && (
        <div className={selectorMenuStyle}>
          <ul ref={ulRef} className={styles.list}>
            {useCountryList.map((item, index) => (
              <li
                className={styles.itemSelect}
                style={highlightedIndex === index ? { backgroundColor: '#BDE4FF' } : {}}
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                <span>{item.title}</span>
                <div className={styles.codeWrapper}>
                  <span className={styles.margin}>{item.countryCode}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.icon} className={cn(styles.margin, styles.flag)} alt={item.title} width='18px' height="13px"/>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
