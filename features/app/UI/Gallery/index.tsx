import { useEffect, useState, useRef, MutableRefObject } from 'react'

import cn from 'clsx'
import Image from 'next/image'

import { useVisible } from 'shared/utils/useVisible'

import imagesList from '../../../../shared/data/images.json'
import { useNavigation } from '../../providers/NavigationProvider'
import Slider from './Slider'

import styles from './Gallery.module.scss'

interface IClick {
  link: string
}

interface IStyle {
  item: number
}

const showPopUp = () => {
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y')
  const body = document.body
  body.style.position = 'fixed'
  body.style.top = `-${scrollY}`
}
const closePopUp = () => {
  const body = document.body
  const scrollY = body.style.top
  body.style.position = ''
  body.style.top = ''
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
}

const Gallery = () => {
  const [clickedImg, setClickedImg] = useState<string | null>(null)

  const { momentsRef } = useNavigation()

  const isVisible = useVisible(momentsRef as MutableRefObject<Element>)

  const handleClick = (item: IClick) => {
    setClickedImg(item.link)
  }

  const fotoStyle = ({ item }: IStyle) =>
    cn(styles.wrapperImage, {
      [styles.wrapperImage_albom]: item > 3 && item < 12
    })

  const linkStyle = cn(styles.link, {
    ['wow animate__animated animate__fadeInDown']: isVisible
  })

  const galleryLength = imagesList.images.length

  useEffect(() => {
    const handleScroll = () => document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={styles.root} id="moments" ref={momentsRef}>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>#Яркие Моменты</p>
      </div>
      <div className={styles.imageList}>
        {imagesList.images.map((item, index) => {
          return (
            <a
              key={index}
              className={linkStyle}
              onClick={() => {
                showPopUp()
                handleClick(item)
              }}
            >
              <div className={fotoStyle({ item: index })}>
                <Image
                  fill
                  src={item.link}
                  loading="lazy"
                  alt="football photo"
                  sizes="(max-width: 959.9px) 50vw, (min-width: 960px) 25vw"
                />
              </div>
            </a>
          )
        })}
        {clickedImg && (
          <Slider galleryLength={galleryLength} clickedImg={clickedImg} setClickedImg={setClickedImg} stopScroll={closePopUp} />
        )}
      </div>
    </div>
  )
}

export default Gallery
